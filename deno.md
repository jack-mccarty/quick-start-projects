# Quick Start Commands for Deno

## Install

### Linux or macOS

```command
curl -fsSL https://deno.land/x/install/install.sh | sh
```

### Powershell

```PowerShell
irm https://deno.land/install.ps1 | iex
```

[View other install options](https://deno.land/manual/getting_started/installation)

## New Fresh Project

```powershell
deno run -A -r https://fresh.deno.dev
cd fresh-project
deno task start
```

[View the docs](https://fresh.deno.dev/docs/introduction)

## Start a Blog with Blog Package

```shell
deno run -r --allow-read --allow-write https://deno.land/x/blog/init.ts ./directory/for/blog/
```

[View the package docs](https://deno.land/x/blog)

## Issues

### Certificate Issues (Common in Corporate Environments)

If you are getting  a certificate error when running a command or script that looks like this:

```shell
0: error trying to connect: invalid peer certificate: UnknownIssuer
1: invalid peer certificate: UnknownIssuer
```

Use the `--unsafely-ignore-certificate-errors` flag when running Deno commands from command line/powershell

ie:

```powershell

deno run --allow-net --unsafely-ignore-certificate-errors app.ts
```

>Note: If you can resolve the certificate issue, please do so. This is a temporary workaround.
