@echo off
call git add .

if "%~1" == "" (
  call git commit -m "x"
) else (
  call git commit -m %*
)

call git push
