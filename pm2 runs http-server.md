(1) Check where http-server is located by executing:
```
which http-server
```

(2) You should get something like this /usr/bin/http-server

Then cd to the directory you want to serve files from and execute:

(2) run:
```
pm2 start /usr/bin/http-server --name my-file-server -- -p 8080 -d false
```

references:
https://stackoverflow.com/questions/31804966/running-nodejs-http-server-forever-with-pm2
