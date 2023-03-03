node{
    stage("Git clone"){   
       	git credentials: 'GIT_HUB_CREDENTIALS', url: 'https://github.com/trankienhcl/docker_app.git'   
    }
    stage("Docker build"){
	sh 'whoami'
	sh 'sudo docker build -t docker_app .'
	sh 'sudo docker tag docker-app kayeofhallownest/nodeapp:v1'
	sh 'sudo docker image'
    }   
     
    withCredentials([string(credentialsId: 'DOCKER_HUB_PASSWORD', variable: 'PASSWORD')]){   
        sh 'sudo docker login -u kayeofhallownest -p pankaye1999'   
    }   
}
