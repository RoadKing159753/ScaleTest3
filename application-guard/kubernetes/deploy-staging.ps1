$prevPwd = $PWD; Set-Location -ErrorAction Stop -LiteralPath $PSScriptRoot

kubectl kustomize ./overlays/staging
kubectl apply -k ./overlays/staging

kubectl rollout restart deployment/apps-application-guard

$prevPwd | Set-Location