aws ssm get-parameters-by-path --with-decryption --query "Parameters[*].{name: Name, value: Value}" --path "/daarbStrapiBackend" > params.json && node ./scripts/convertToEnv.js params.json
