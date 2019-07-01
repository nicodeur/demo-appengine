package main

import (
	"os"
	"fmt"
    "log"
	"net/http"
	"encoding/json"
)

type data struct {
	Data envInfo `json:"data"`
}

type envInfo struct {
	EnvInfo gae_info `json:"envInfo"`
}

type custom struct {
	Custom redisInfo `json:"custom"`
}

type redisInfo struct {
	RedisHost string `json:"redisHost"`
	RedisPort string `json:"redisPort"`
	Staging string `json:"staging"`
}

type gae_info struct {
	GAE_INSTANCE string `json:"GAE_INSTANCE"`
	GAE_MEMORY_MB string `json:"GAE_MEMORY_MB"`
	GAE_SERVICE string `json:"GAE_SERVICE"`
	GAE_VERSION string `json:"GAE_VERSION"`
	GOOGLE_CLOUD_PROJECT string `json:"GOOGLE_CLOUD_PROJECT"`
	PORT string `json:"PORT"`
	Custom redisInfo`json:"custom"`
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
}

func main() {
    http.HandleFunc("/preprod/gae/info", func(w http.ResponseWriter, r *http.Request) {

		enableCors(&w)

		fmt.Println("Log from service /preprod/gae/info")

		custom := redisInfo {os.Getenv("redisHost"), os.Getenv("redisPort"), os.Getenv("staging") }

		info := data { envInfo { gae_info {
										os.Getenv("GAE_INSTANCE") , 
										os.Getenv("GAE_MEMORY_MB"), 
										os.Getenv("GAE_SERVICE"), 
										os.Getenv("GAE_VERSION"), 
										os.Getenv("GOOGLE_CLOUD_PROJECT"), 
										os.Getenv("PORT"),
										custom ,
									} ,
							} ,
				}

		json.NewEncoder(w).Encode(info)

    })

    log.Fatal(http.ListenAndServe(":8080", nil))
}