// main.go
package main

import (
    "net/http"
    "os"
    "github.com/labstack/echo/v4"
)

func main() {
    hello := os.Getenv("HELLO")
    output := "Hello " + hello

    e := echo.New()
    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, output)
    })
    e.Logger.Fatal(e.Start(":1323"))
}
