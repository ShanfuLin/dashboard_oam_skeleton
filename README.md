# OAM-Dashboard

## Get started
```
git clone 
```
Make sure to checkout to a new branch before working, and `git pull` frequently. Make sure to start a new branch when adding features.



## Using git with SSH for gitlab instances using self-signed certificates

Doing `git clone` with HTTPS protocol might not work with self-signed certificates so using SSH is always prefered. Assuming you already have keys setup and added the config to your `.ssh/config` file, git clone the repo using using the hostname. For example, for this setup:
```
Host halim-gitlab-STEng
        User git
        HostName gitlab.server.io
        PubkeyAuthentication yes
        PreferredAuthentications publickey
        IdentityFile /home/halim/.ssh/id_ed25519_gitlab_STEng
```
Replace the  `gitlab.server.io` in `git@gitlab.server.io:halim/oam-dashboard.git` with your Host, as shown:

```
$ git clone git@halim-gitlab-STEng:halim/oam-dashboard.git
```

With this setup, there should not be any errors when doing `git pull`, `git push` or any other git commands with regards to the repo despite the self-signed certificates.

## Switching from HTTPS to SSH for remote repo

If you are experiencing problems using `git` commands since you've cloned the repo via **HTTPS** and cant continue due to self-signed certificates errors, switch the git remote from **HTTPS** to **SSH**. 

Check state of the current remote git repo with 
```
git remote -v
```
Your output should contain `http` links 
```
origin  https://gitlab.server.io/halim/oam-dashboard.git (fetch)
origin  https://gitlab.server.io/halim/oam-dashboard.git (push)
```
Switch to an SSH-based repo by calling
```
git remote set-url origin git@halim-gitlab-STEng:halim/oam-dashboard.git
```
taking note that the formatting of the **origin URL**. It should match information in your `.ssh/config` file. 
