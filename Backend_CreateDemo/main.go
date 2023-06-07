package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
)

func main() {
	r := setupRouter()
	log.Fatal(http.ListenAndServe(":8000", r))
}

func setupRouter() http.Handler {
	r := http.NewServeMux()
	r.HandleFunc("/save-env", saveEnvHandler)
	return r
}

func saveEnvHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	err := r.ParseForm()
	if err != nil {
		http.Error(w, "Failed to parse form data", http.StatusInternalServerError)
		return
	}

	var envLines []string
	for key, values := range r.Form {
		// Validar y sanitizar los datos del formulario según sea necesario
		if len(values) > 0 {
			envLines = append(envLines, fmt.Sprintf("%s=%s", key, values[0]))
		}
	}

	err = createEnvFile("../react_form_API_POST/form_POST", envLines)
	if err != nil {
		http.Error(w, "Failed to save environment variables", http.StatusInternalServerError)
		return
	}

	err = runNpmBuild("../react_form_API_POST/form_POST")
	if err != nil {
		http.Error(w, "Failed to run 'npm run build'", http.StatusInternalServerError)
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write([]byte("Environment variables saved successfully and 'npm run build' executed"))
}

func createEnvFile(folderPath string, envLines []string) error {
	filePath := folderPath + "/.env"
	file, err := os.Create(filePath)
	if err != nil {
		return err
	}
	defer file.Close()

	for _, line := range envLines {
		_, err := io.WriteString(file, line+"\n")
		if err != nil {
			return err
		}
	}

	return nil
}

func runNpmBuild(folderPath string) error {
	cmd := exec.Command("npm", "run", "build")
	cmd.Dir = folderPath

	err := cmd.Run()
	if err != nil {
		return err
	}

	return nil
}
