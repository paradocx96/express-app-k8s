# Kubernetes - K8s  

## Create Deployement and Yaml
```
kubectl create deploy {{app-name}} --image {{dockerhub-username}}/{{repo-name}}:{{version}} -o yaml
```
```
kubectl create deploy express-app --image paradocx96/express-app-k8s:v1 -o yaml
```

## Create Service and Yaml
```
kubectl expose deploy {{app-name}} --port {{expose-port}} --target-port {{app-port}} --dry-run=client -o yaml
```
```
kubectl expose deploy express-app --port 3000 --target-port 3000 --dry-run=client -o yaml
```

## Expose Service
```
kubectl port-forward svc/{{app-name}} {{expose-port}}:{{app-port}}
```
```
kubectl port-forward svc/express-app 3000:3000
```

## Cluster Info
```
kubectl cluster-info
```

## Check Cluster Role Admin is available
```
kubectl get clusterroles | grep cluster-admin
```

## View Service Accounts
```
kubectl get serviceaccounts
```
```
kubectl get sa
```

## Create Service Account
```
kubectl create sa {{account-name}}
```

## Create Cluster role binding for new Service Account
```
kubectl create clusterrolebinding {{role-binding-name}} --clusterrole cluster-admin --serviceaccount default:{{new-sa-name}}
```

## View Secrets
```
kubectl get secrets
```

## View Service Account Secret as Base64
```
kubectl get secret -o json {{sa-secret-name}} | jq .data."token" -r | base64 -d
```

## Create Kube Config in Azure
```
az aks get-credentials --resource-group {{resource-group}} --name {{cluster-name}} --admin
```

## Check Kube Config
```
kubectl config current-context
```

## View Kube Config as Base64
```
cat .kube/config | base64
```

## View Running Pods
```
kubectl get pods
```
```
kubectl get pods -o wide
```

## View Running Deployments
```
kubectl get deployment
```
```
kubectl get deployment -o wide
```

## View Running Services
```
kubectl get svc
```
```
kubectl get svc -o wide
```

## View All Running Resources
```
kubectl get all
```
```
kubectl get all -o wide
```

## Describe Service
```
kubectl describe svc {{service-name}}
```

## Kubectl Apply
```
kubectl apply -f ./deploy.yaml
```
```
kubectl apply -f https://github.com/paradocx96/nginx-app-k8s/blob/main/deploy.yaml
```
```
kubectl apply -f - <<EOF
---
apiVersion: v1
kind: Pod
metadata:
  name: busybox-sleep
spec:
  containers:
  - name: busybox
    image: busybox:1.28
    args:
    - sleep
    - "1000000"
---
apiVersion: v1
kind: Pod
metadata:
  name: busybox-sleep-less
spec:
  containers:
  - name: busybox
    image: busybox:1.28
    args:
    - sleep
    - "1000"
EOF
```

## Create BusyBox for Testing
```
kubectl run -i --tty busybox --image=busybox:1.28 -- sh
```

## Delete Pod
```
kubectl delete pod {{app-name}}
```
