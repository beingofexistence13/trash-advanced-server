# Saturo gojo will return again after death at jjk chapter 238 :) I am damn sure!!!










gitpod /workspace/android (master) $ repo init -u https://android.googlesource.com/platform/manifest
bash: repo: command not found
gitpod /workspace/android (master) $ git clone https://android.googlesource.com/platform/manifest
fatal: repository 'repo' does not exist
gitpod /workspace/android (master) $ git clone -u https://android.googlesource.com/platform/manifest
fatal: You must specify a repository to clone.

usage: git clone [<options>] [--] <repo> [<dir>]

    -v, --verbose         be more verbose
    -q, --quiet           be more quiet
    --progress            force progress reporting
    --reject-shallow      don't clone shallow repository
    -n, --no-checkout     don't create a checkout
    --bare                create a bare repository
    --mirror              create a mirror repository (implies bare)
    -l, --local           to clone from a local repository
    --no-hardlinks        don't use local hardlinks, always copy
    -s, --shared          setup as shared repository
    --recurse-submodules[=<pathspec>]
                          initialize submodules in the clone
    --recursive ...       alias of --recurse-submodules
    -j, --jobs <n>        number of submodules cloned in parallel
    --template <template-directory>
                          directory from which templates will be used
    --reference <repo>    reference repository
    --reference-if-able <repo>
                          reference repository
    --dissociate          use --reference only while cloning
    -o, --origin <name>   use <name> instead of 'origin' to track upstream
    -b, --branch <branch> checkout <branch> instead of the remote's HEAD
    -u, --upload-pack <path>
                          path to git-upload-pack on the remote
    --depth <depth>       create a shallow clone of that depth
    --shallow-since <time>
                          create a shallow clone since a specific time
    --shallow-exclude <revision>
                          deepen history of shallow clone, excluding rev
    --single-branch       clone only one branch, HEAD or --branch
    --no-tags             don't clone any tags, and make later fetches not to follow them
    --shallow-submodules  any cloned submodules will be shallow
    --separate-git-dir <gitdir>
                          separate git dir from working tree
    -c, --config <key=value>
                          set config inside the new repository
    --server-option <server-specific>
                          option to transmit
    -4, --ipv4            use IPv4 addresses only
    -6, --ipv6            use IPv6 addresses only
    --filter <args>       object filtering
    --also-filter-submodules
                          apply partial clone filters to submodules
    --remote-submodules   any cloned submodules will use their remote-tracking branch
    --sparse              initialize sparse-checkout file to include only files at root
    --bundle-uri <uri>    a URI for downloading bundles before fetching from origin remote

gitpod /workspace/android (master) $ git clone https://android.googlesource.com/platform/manifest
Cloning into 'manifest'...
remote: Total 112600 (delta 37289), reused 112600 (delta 37289)
Receiving objects: 100% (112600/112600), 182.41 MiB | 44.93 MiB/s, done.
Resolving deltas: 100% (37289/37289), done.
gitpod /workspace/android (master) $ git clone https://android.googlesource.com/platform/manifest -b main
Cloning into 'manifest'...
remote: Total 112600 (delta 37289), reused 112600 (delta 37289)
Receiving objects: 100% (112600/112600), 182.41 MiB | 41.68 MiB/s, done.
Resolving deltas: 100% (37289/37289), done.
gitpod /workspace/android (master) $ cd manifest
gitpod /workspace/android/manifest (main) $ repo sync
bash: repo: command not found
gitpod /workspace/android/manifest (main) $ cd ..
gitpod /workspace/android (master) $ sudo apt-get install repo
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  python3-kerberos
The following NEW packages will be installed:
  python3-kerberos repo
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 141 kB of archives.
After this operation, 444 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://archive.ubuntu.com/ubuntu jammy/universe amd64 python3-kerberos amd64 1.1.14-3.1build5 [23.0 kB]
Get:2 http://archive.ubuntu.com/ubuntu jammy/multiverse amd64 repo all 2.17.3-3 [118 kB]
Fetched 141 kB in 0s (303 kB/s)
debconf: delaying package configuration, since apt-utils is not installed
Selecting previously unselected package python3-kerberos.
(Reading database ... 35597 files and directories currently installed.)
Preparing to unpack .../python3-kerberos_1.1.14-3.1build5_amd64.deb ...
Unpacking python3-kerberos (1.1.14-3.1build5) ...
Selecting previously unselected package repo.
Preparing to unpack .../archives/repo_2.17.3-3_all.deb ...
Unpacking repo (2.17.3-3) ...
Setting up python3-kerberos (1.1.14-3.1build5) ...
Setting up repo (2.17.3-3) ...
Processing triggers for man-db (2.10.2-1) ...
gitpod /workspace/android (master) $ cd manifest
gitpod /workspace/android/manifest (main) $ repo sync
error: command 'sync' requires repo to be installed first.
        Use "repo init" to install it here.
gitpod /workspace/android/manifest (main) $ cd ..
gitpod /workspace/android (master) $ rm -rf manifest
gitpod /workspace/android (master) $ repo init -u https://android.googlesource.com/platform/manifest -b main
Downloading Repo source from https://gerrit.googlesource.com/git-repo
repo: Updating release signing keys to keyset ver 2.3
/workspace/android/.repo/repo/main.py:569: DeprecationWarning: The 'warn' method is deprecated, use 'warning' instead
  logger.warn("\n... A new version of repo (%s) is available.", exp_str)

... A new version of repo (2.37) is available.
/workspace/android/.repo/repo/main.py:580: DeprecationWarning: The 'warn' method is deprecated, use 'warning' instead
  logger.warn(
... New version is available at: /workspace/android/.repo/repo/repo
... The launcher is run from: /usr/bin/repo
!!! The launcher is not writable.  Please talk to your sysadmin or distro
!!! to get an update installed.


Your identity is: Being Of Existence <manfromearth25@gmail.com>
If you want to change this, please re-run 'repo init' with --config-name

Testing colorized output (for 'repo diff', 'repo status'):
  black    red      green    yellow   blue     magenta   cyan     white 
  bold     dim      ul       reverse 
Enable color display in this user account (y/N)? y

repo has been initialized in /workspace/android
gitpod /workspace/android (master) $ repo sync
/workspace/android/.repo/repo/main.py:569: DeprecationWarning: The 'warn' method is deprecated, use 'warning' instead
  logger.warn("\n... A new version of repo (%s) is available.", exp_str)

... A new version of repo (2.37) is available.
/workspace/android/.repo/repo/main.py:580: DeprecationWarning: The 'warn' method is deprecated, use 'warning' instead
  logger.warn(
... New version is available at: /workspace/android/.repo/repo/repo
... The launcher is run from: /usr/bin/repo
!!! The launcher is not writable.  Please talk to your sysadmin or distro
!!! to get an update installed.

remote: Counting objects: 1           
remote: Finding sources:   1% (409/81741)           
remote: Finding sources:   2% (1227/81741)           
remote: Finding sources:   3% (2044/81741)           
remote: Finding sources:   4% (2861/81741)           
remote: Finding sources:   5% (3679/81741)           
remote: Finding sources:   6% (4496/81741)           
remote: Finding sources:   7% (5314/81741)           
remote: Finding sources:   8% (6131/81741)           
remote: Finding sources:   9% (6948/81741)           
remote: Finding sources:  10% (7766/81741)           
remote: Finding sources:  11% (8583/81741)           
remote: Finding sources:  12% (9401/81741)           
remote: Finding sources:  13% (10218/81741)           
remote: Finding sources:  14% (11036/81741)           
remote: Finding sources:  15% (11853/81741)           
remote: Finding sources:  16% (12670/81741)           
remote: Finding sources:  17% (13488/81741)           
remote: Finding sources:  18% (14305/81741)           
remote: Finding sources:  19% (15123/81741)           
remote: Finding sources:  20% (15940/81741)           
remote: Finding sources:  21% (16757/81741)           
remote: Finding sources:  22% (17575/81741)           
remote: Finding sources:  23% (18392/81741)           
remote: Finding sources:  24% (19210/81741)           
remote: Finding sources:  25% (20027/81741)           
remote: Finding sources:  26% (20844/81741)           
remote: Finding sources:  27% (21662/81741)           
remote: Finding sources:  28% (22479/81741)           
remote: Finding sources:  29% (23297/81741)           
remote: Finding sources:  30% (24114/81741)           
remote: Finding sources:  31% (24932/81741)           
remote: Finding sources:  32% (25749/81741)           
remote: Finding sources:  33% (26566/81741)           
remote: Finding sources:  34% (27384/81741)           
remote: Finding sources:  35% (28201/81741)           
remote: Finding sources:  36% (29019/81741)           
remote: Finding sources:  37% (29836/81741)           
remote: Finding sources:  38% (30653/81741)           
remote: Finding sources:  39% (31471/81741)           
remote: Finding sources:  40% (32288/81741)           
remote: Finding sources:  41% (33106/81741)           
remote: Finding sources:  42% (33923/81741)           
remote: Finding sources:  43% (34740/81741)           
remote: Finding sources:  44% (35558/81741)           
remote: Finding sources:  45% (36375/81741)           
remote: Finding sources:  46% (37193/81741)           
remote: Finding sources:  47% (38010/81741)           
remote: Finding sources:  48% (38827/81741)           
remote: Finding sources:  49% (39645/81741)           
remote: Finding sources:  50% (40462/81741)           
remote: Finding sources:  51% (41280/81741)           
remote: Finding sources:  52% (42097/81741)           
remote: Finding sources:  53% (42915/81741)           
remote: Finding sources:  54% (43732/81741)           
remote: Finding sources:  55% (44549/81741)           
remote: Finding sources:  56% (45367/81741)           
remote: Finding sources:  57% (46184/81741)           
remote: Finding sources:  58% (47002/81741)           
remote: Finding sources:  59% (47819/81741)           
remote: Finding sources:  60% (48636/81741)           
remote: Finding sources:  61% (49454/81741)           
remote: Finding sources:  62% (50271/81741)           
remote: Finding sources:  63% (51089/81741)           
remote: Finding sources:  64% (51906/81741)           
remote: Finding sources:  65% (52723/81741)           
remote: Finding sources:  66% (53541/81741)           
remote: Finding sources:  67% (54358/81741)           
remote: Finding sources:  68% (55176/81741)           
remote: Finding sources:  69% (55993/81741)           
remote: Finding sources:  70% (56810/81741)           
remote: Finding sources:  71% (57628/81741)           
remote: Finding sources:  72% (58445/81741)           
remote: Finding sources:  73% (59263/81741)           
remote: Finding sources:  74% (60080/81741)           
remote: Finding sources:  75% (60898/81741)           
remote: Finding sources:  76% (61715/81741)           
remote: Finding sources:  77% (62532/81741)           
remote: Finding sources:  78% (63350/81741)           
remote: Finding sources:  79% (64167/81741)           
remote: Finding sources:  80% (64985/81741)           
remote: Finding sources:  81% (65802/81741)           
remote: Finding sources:  82% (66619/81741)           
remote: Finding sources:  83% (67437/81741)           
remote: Finding sources:  84% (68254/81741)           
remote: Finding sources:  85% (69072/81741)           
remote: Finding sources:  86% (69889/81741)           
remote: Finding sources:  87% (70706/81741)           
remote: Finding sources:  88% (71524/81741)           
remote: Finding sources:  89% (72341/81741)           
remote: Finding sources:  90% (73159/81741)           
remote: Finding sources:  91% (73976/81741)           
remote: Finding sources:  92% (74794/81741)           
remote: Finding sources:  93% (75611/81741)           
remote: Finding sources:  94% (76428/81741)           
remote: Finding sources:  95% (77246/81741)           
remote: Finding sources:  96% (78063/81741)           
remote: Finding sources:  97% (78881/81741)           
remote: Finding sources:  98% (79698/81741)           
remote: Finding sources:  99% (80515/81741)           
remote: Finding sources: 100% (81333/81741)           
remote: Finding sources: 100% (81741/81741)        
remote: Total 81741 (delta 24101), reused 81737 (delta 24101)        
Receiving objects: 100% (1014/1014), 579.84 KiB | 27.61 MiB/s, done.1014)
Resolving deltas: 100% (181/181), done.
Receiving objects: 100% (20186/20186), 23.76 MiB | 39.12 MiB/s, done.ng objects:   0% (1/927)
Receiving objects: 100% (927/927), 288.62 KiB | 15.19 MiB/s, done.
Resolving deltas: 100% (16/16), done.
Resolving deltas: 100% (6935/6935), done.
Receiving objects: 100% (155/155), 36.65 KiB | 18.33 MiB/s, done.eiving objects:   0% (1/155)
Resolving deltas: 100% (56/56), done.
Receiving objects: 100% (1160/1160), 390.19 KiB | 27.87 MiB/s, done.
Resolving deltas: 100% (42/42), done.
Receiving objects: 100% (8368/8368), 6.57 MiB | 33.00 MiB/s, done.iving objects:   0% (1/8368)
Resolving deltas: 100% (1818/1818), done.
Receiving objects: 100% (438546/438546), 257.49 MiB | 37.50 MiB/s, done.objects:  98% (429776/438546), 243.75 MiB | 35.24 MiB/s
Receiving objects: 100% (194136/194136), 122.91 MiB | 19.65 MiB/s, done.objects:  29% (110603/381389), 28.50 MiB | 11.40 MiB/s
Resolving deltas: 100% (90046/90046), done.7.84 MiB | 10.01 MiB/solving deltas:  83% (228433/275220)
Receiving objects: 100% (381389/381389), 141.32 MiB | 12.99 MiB/s, done.objects: 100% (381389/381389), 136.51 MiB | 11.74 MiB/s
Resolving deltas: 100% (275220/275220), done.latform/art @ artResolving deltas:  91% (209794/228458)
Resolving deltas: 100% (228458/228458), done.latform/art @ artResolving deltas: 100% (228458/228458)
Receiving objects: 100% (3183/3183), 848.07 KiB | 30.29 MiB/s, done.ing objects:   0% (1/3183)
Resolving deltas: 100% (521/521), done.
Receiving objects: 100% (1701/1701), 514.81 KiB | 24.51 MiB/s, done.ing objects:   0% (1/1701)
Resolving deltas: 100% (10/10), done.
Receiving objects: 100% (2024/2024), 591.52 KiB | 29.58 MiB/s, done.ing objects:   0% (1/146094)
Resolving deltas: 100% (82/82), done.
Receiving objects: 100% (146094/146094), 68.97 MiB | 37.35 MiB/s, done. objects:  73% (106649/146094), 20.22 MiB | 40.42 MiB/s
Receiving objects: 100% (1209/1209), 340.77 KiB | 22.72 MiB/s, done.ing deltas:  12% (9846/82044)
Resolving deltas: 100% (115/115), done.
Resolving deltas: 100% (82044/82044), done. platform/cts @ ctsResolving deltas:  89% (73020/82044)
Receiving objects: 100% (9296/9296), 4.02 MiB | 44.25 MiB/s, done.eiving objects:  39% (17363/44520)
Resolving deltas: 100% (2959/2959), done.
Receiving objects: 100% (44520/44520), 158.29 MiB | 77.59 MiB/s, done.ng objects:  99% (44362/44520), 116.36 MiB | 77.57 MiB/s
Resolving deltas: 100% (21430/21430), done.7 platform/cts @ ctsResolving deltas:  44% (9430/21430)
Receiving objects: 100% (1105/1105), 474.66 KiB | 24.98 MiB/s, done.
Resolving deltas: 100% (65/65), done.
Receiving objects: 100% (3173/3173), 954.99 KiB | 28.09 MiB/s, done.
Resolving deltas: 100% (174/174), done.
Receiving objects: 100% (40092/40092), 15.17 MiB | 24.89 MiB/s, done.ing objects:  98% (39291/40092), 12.24 MiB | 24.52 MiB/s
Resolving deltas: 100% (13373/13373), done.
Receiving objects: 100% (31385/31385), 28.93 MiB | 26.17 MiB/s, done.ing objects:  98% (30758/31385), 26.03 MiB | 26.02 MiB/s
Resolving deltas: 100% (12610/12610), done.
Receiving objects: 100% (33547/33547), 77.65 MiB | 69.20 MiB/s, done.ing objects:  99% (33212/33547), 66.90 MiB | 66.89 MiB/s
Resolving deltas: 100% (12914/12914), done.1 platform/cts @ ctsResolving deltas:  65% (8395/12914)
Receiving objects: 100% (1724/1724), 523.42 KiB | 29.08 MiB/s, done.
Resolving deltas: 100% (18/18), done.
Receiving objects: 100% (1854/1854), 551.08 KiB | 26.24 MiB/s, done.ving objects:   0% (1/1854)
Resolving deltas: 100% (58/58), done.
Receiving objects: 100% (1767/1767), 535.87 KiB | 26.79 MiB/s, done.ving objects:   0% (1/130997)
Resolving deltas: 100% (13/13), done.)
Receiving objects: 100% (130997/130997), 24.37 MiB | 37.30 MiB/s, done.g objects:  81% (106108/130997)
Resolving deltas: 100% (80988/80988), done.7 platform/cts @ ctsResolving deltas:  85% (68840/80988)
Receiving objects: 100% (1709/1709), 519.03 KiB | 24.71 MiB/s, done.ving objects:   0% (1/1709)
Resolving deltas: 100% (8/8), done.
Receiving objects: 100% (1987/1987), 599.25 KiB | 28.54 MiB/s, done.ving objects:  20% (398/1987)
Resolving deltas: 100% (68/68), done.
Receiving objects: 100% (2083/2083), 660.37 KiB | 33.02 MiB/s, done.ving objects:   0% (1/2083)
Resolving deltas: 100% (173/173), done.
Receiving objects: 100% (1511/1511), 453.01 KiB | 23.84 MiB/s, done.ving objects:   0% (1/25671)
Resolving deltas: 100% (53/53), done.
Receiving objects: 100% (25671/25671), 46.35 MiB | 27.82 MiB/s, done.ing objects: 100% (25671/25671), 42.64 MiB | 28.44 MiB/s
Resolving deltas: 100% (11290/11290), done.5 platform/cts @ ctsResolving deltas:  83% (9371/11290)
Receiving objects: 100% (5233/5233), 12.49 MiB | 65.57 MiB/s, done.
Resolving deltas: 100% (1514/1514), done.
Receiving objects: 100% (1853/1853), 550.20 KiB | 32.36 MiB/s, done.ving objects:   0% (1/1853)
Resolving deltas: 100% (31/31), done.
Receiving objects: 100% (915/915), 249.09 KiB | 22.64 MiB/s, done.
Resolving deltas: 100% (96/96), done.
Receiving objects: 100% (1670/1670), 506.70 KiB | 31.67 MiB/s, done.ving objects:   0% (1/1670)
Resolving deltas: 100% (10/10), done.
Receiving objects: 100% (12650/12650), 25.00 MiB | 67.37 MiB/s, done.ing objects:   0% (1/12650)
Resolving deltas: 100% (3920/3920), done.171.46 MiB | 57.15 MiB/s
Receiving objects: 100% (496/496), 142.77 KiB | 20.39 MiB/s, done.eiving objects:   0% (1/496)
Resolving deltas: 100% (7/7), done.
Receiving objects: 100% (8060/8060), 11.49 MiB | 67.22 MiB/s, done.iving objects:   0% (1/8060)
Resolving deltas: 100% (2559/2559), done.
Receiving objects: 100% (5207/5207), 120.35 MiB | 101.43 MiB/s, done.
Resolving deltas: 100% (1480/1480), done.:31 platform/cts @ ctsReceiving objects:  93% (164894/177305), 427.55 MiB | 53.30 MiB/s
Receiving objects: 100% (1147/1147), 302.20 KiB | 23.25 MiB/s, done.ving objects:  94% (166667/177305), 443.47 MiB | 52.65 MiB/s
Resolving deltas: 100% (168/168), done.
Receiving objects: 100% (177305/177305), 480.89 MiB | 51.62 MiB/s, done. objects:  99% (175532/177305), 465.58 MiB | 48.93 MiB/s
Resolving deltas: 100% (97455/97455), done.5 platform/cts @ ctsResolving deltas:  95% (92583/97455)
Receiving objects: 100% (21851/21851), 4.88 MiB | 36.18 MiB/s, done.ving objects:  83% (18137/21851)
Resolving deltas: 100% (13232/13232), done.
Receiving objects: 100% (21867/21867), 11.35 MiB | 47.04 MiB/s, done.ing objects:   0% (1/21867)
Resolving deltas: 100% (8997/8997), done.:40 platform/cts @ ctsResolving deltas:  92% (8278/8997)
Receiving objects: 100% (5304/5304), 91.97 MiB | 35.96 MiB/s, done.iving objects:  96% (5092/5304), 73.07 MiB | 36.04 MiB/s
Resolving deltas: 100% (1248/1248), done.:56 platform/cts @ ctsResolving deltas: 100% (1248/1248)
Receiving objects: 100% (272/272), 52.04 KiB | 17.35 MiB/s, done.ceiving objects:   0% (1/272)
Resolving deltas: 100% (99/99), done.
Receiving objects: 100% (2470/2470), 26.86 MiB | 54.35 MiB/s, done.iving objects:  91% (2248/2470)
Resolving deltas: 100% (976/976), done.
Receiving objects: 100% (14591/14591), 2.87 MiB | 37.63 MiB/s, done.ving objects:  29% (4232/14591)
Resolving deltas: 100% (6507/6507), done.
Receiving objects: 100% (147107/147107), 53.98 MiB | 36.49 MiB/s, done.g objects:  83% (122099/147107), 18.69 MiB | 37.36 MiB/s
Resolving deltas: 100% (80229/80229), done.4 platform/cts @ ctsResolving deltas:  79% (63381/80229)
Receiving objects: 100% (9532/9532), 59.12 MiB | 63.99 MiB/s, done.iving objects:  91% (8675/9532), 28.75 MiB | 57.49 MiB/s
Resolving deltas: 100% (4500/4500), done.
Receiving objects: 100% (7438/7438), 1.63 MiB | 37.96 MiB/s, done.eiving objects:  32% (4680/14625)
Resolving deltas: 100% (4236/4236), done.
Receiving objects: 100% (4000/4000), 5.00 MiB | 41.26 MiB/s, done.eiving objects:   0% (1/4000)
Resolving deltas: 100% (1808/1808), done.:57 platform/cts @ ctsResolving deltas: 100% (1808/1808)
Receiving objects: 100% (14625/14625), 509.64 MiB | 92.53 MiB/s, done.ng objects: 100% (14625/14625), 509.57 MiB | 91.73 MiB/s
Resolving deltas: 100% (6377/6377), done.:02 platform/cts @ ctsResolving deltas:  96% (6122/6377)
Receiving objects: 100% (14146/14146), 3.04 MiB | 35.75 MiB/s, done.ving objects:   0% (1/14146)
Resolving deltas: 100% (4907/4907), done.
Receiving objects: 100% (295/295), 56.20 KiB | 18.73 MiB/s, done.ceiving objects:   0% (1/295)
Resolving deltas: 100% (106/106), done.
Receiving objects: 100% (8545/8545), 22.22 MiB | 58.48 MiB/s, done.iving objects:  90% (7691/8545)
Resolving deltas: 100% (4138/4138), done.:12 platform/cts @ ctsResolving deltas:  69% (2856/4138)
Receiving objects: 100% (14397/14397), 253.21 MiB | 98.33 MiB/s, done.ng objects:  96% (1880713/1959076), 2.45 GiB | 53.35 MiB/s
Receiving objects: 100% (132/132), 31.80 KiB | 15.90 MiB/s, done.solving deltas:  76% (4226/5560)
Resolving deltas: 100% (17/17), done.
Resolving deltas: 100% (5560/5560), done.
Receiving objects: 100% (13207/13207), 2.90 MiB | 34.90 MiB/s, done.ving objects:   0% (1/13207)
Resolving deltas: 100% (5313/5313), done.
Receiving objects: 100% (8556/8556), 12.62 MiB | 71.42 MiB/s, done.iving objects:   0% (1/8556)
Resolving deltas: 100% (3234/3234), done.
Receiving objects: 100% (1267/1267), 328.76 KiB | 27.40 MiB/s, done.ving objects:   0% (1/1267)
Resolving deltas: 100% (169/169), done.
Receiving objects: 100% (17504/17504), 12.41 MiB | 48.87 MiB/s, done.ing objects:  97% (16979/17504)
Resolving deltas: 100% (6045/6045), done.
Receiving objects: 100% (1959076/1959076), 3.45 GiB | 66.98 MiB/s, done. objects: 100% (1959076/1959076), 3.44 GiB | 57.27 MiB/s
Receiving objects: 100% (5280/5280), 120.01 MiB | 27.37 MiB/s, done.ving objects:  99% (5235/5280), 112.28 MiB | 27.62 MiB/s
Resolving deltas: 100% (2508/2508), done.:19 platform/cts @ ctsResolving deltas:  89% (927601/1042248)
Resolving deltas: 100% (1042248/1042248), done.atform/cts @ ctsResolving deltas: 100% (1042248/1042248)
Receiving objects: 100% (11005/11005), 2.36 MiB | 33.63 MiB/s, done.ving objects:   0% (1/11005)
Resolving deltas: 100% (4166/4166), done.
Receiving objects: 100% (15037/15037), 6.01 MiB | 41.59 MiB/s, done.ving objects:  87% (13083/15037)
Resolving deltas: 100% (4919/4919), done.
Receiving objects: 100% (4344/4344), 3.66 MiB | 21.51 MiB/s, done.
Resolving deltas: 100% (1950/1950), done.
Receiving objects: 100% (381/381), 75.46 KiB | 25.15 MiB/s, done.ceiving objects:   0% (1/381)
Resolving deltas: 100% (124/124), done.
Receiving objects: 100% (6341/6341), 1.87 MiB | 30.89 MiB/s, done.eiving objects:   0% (1/6341)
Resolving deltas: 100% (1969/1969), done.
Receiving objects: 100% (1540/1540), 447.42 KiB | 24.86 MiB/s, done.ving objects:   0% (1/1540)
Resolving deltas: 100% (68/68), done.
Receiving objects: 100% (2894/2894), 748.24 KiB | 31.18 MiB/s, done.ving objects:   0% (1/2894)
Resolving deltas: 100% (656/656), done. 4:52 platform/cts @ ctsResolving deltas:  92% (604/656)
Receiving objects: 100% (4047/4047), 57.44 MiB | 34.52 MiB/s, done.o-kernel @ device/google/tangorpro-kernelReceiving objects:  95% (77368/81439), 16.85 MiB | 33.68 MiB/s
Receiving objects: 100% (81439/81439), 34.98 MiB | 37.95 MiB/s, done.
Resolving deltas: 100% (847/847), done.
Receiving objects: 100% (1624/1624), 6.76 MiB | 20.14 MiB/s, done.-kernel @ device/google/redbull-kernelReceiving objects:   0% (1/1624)
Resolving deltas: 100% (70/70), done.
Resolving deltas: 100% (53629/53629), done.6 device/google/redbull-kernel @ device/google/redbull-kernelResolving deltas:  96% (51485/53629)
Receiving objects: 100% (9380/9380), 16.85 MiB | 17.13 MiB/s, done.kernel @ device/google/redbull-kernelReceiving objects:  72% (30135/41853), 19.53 MiB | 39.05 MiB/s
Resolving deltas: 100% (2490/2490), done.:21 device/google/redbull-kernel @ device/google/redbull-kernelResolving deltas:  97% (2417/2490)
Receiving objects: 100% (41853/41853), 159.45 MiB | 33.45 MiB/s, done.nel @ device/google/redbull-kernelReceiving objects:  92% (38505/41853), 138.98 MiB | 30.62 MiB/s
Resolving deltas: 100% (24085/24085), done.4 device/google/redbull-kernel @ device/google/redbull-kernelResolving deltas: 100% (24085/24085)
Receiving objects: 100% (36057/36057), 31.88 MiB | 28.73 MiB/s, done.rnel @ device/google/redbull-kernelReceiving objects:  93% (33534/36057), 25.41 MiB | 25.41 MiB/s
Resolving deltas: 100% (27255/27255), done.8 device/google/redbull-kernel @ device/google/redbull-kernelResolving deltas:  89% (24257/27255)
Receiving objects: 100% (1987/1987), 1.21 MiB | 19.97 MiB/s, done.-kernel @ device/google/redbull-kernelReceiving objects:  35% (696/1987)
Resolving deltas: 100% (137/137), done.
Receiving objects: 100% (28073/28073), 19.07 MiB | 55.31 MiB/s, done.rnel @ device/google/redbull-kernelReceiving objects:  71% (19932/28073)
Resolving deltas: 100% (17456/17456), done.3 device/google/redbull-kernel @ device/google/redbull-kernelResolving deltas:  94% (16409/17456)
Receiving objects: 100% (16984/16984), 28.84 MiB | 52.83 MiB/s, done.rnel @ device/google/redbull-kernelReceiving objects:  42% (66817/159087), 79.28 MiB | 39.66 MiB/s
Resolving deltas: 100% (13334/13334), done.7 device/google/redbull-kernel @ device/google/redbull-kernelResolving deltas:  83% (11068/13334)
Receiving objects: 100% (159087/159087), 234.45 MiB | 39.68 MiB/s, done.brary @ external/ComputeLibraryReceiving objects:   0% (1/145230)
Receiving objects: 100% (7841/7841), 11.58 MiB | 26.17 MiB/s, done.
Resolving deltas: 100% (5044/5044), done.9.93 MiB | 39.85 MiB/sComputeLibrary @ external/ComputeLibraryResolving deltas:  99% (4994/5044)
Receiving objects: 100% (2118/2118), 449.12 KiB | 22.46 MiB/s, done.teLibrary @ external/ComputeLibraryReceiving objects:  57% (83001/145230), 50.75 MiB | 16.91 MiB/s
Resolving deltas: 100% (525/525), done. 50.75 MiB | 16.91 MiB/s
Receiving objects: 100% (3723/3723), 1.40 MiB | 14.15 MiB/s, done.puteLibrary @ external/ComputeLibraryReceiving objects:  48% (11424/23798), 137.85 MiB | 18.25 MiB/s
Resolving deltas: 100% (2373/2373), done.4.04 MiB | 16.87 MiB/ss
Receiving objects: 100% (23798/23798), 176.00 MiB | 21.76 MiB/s, done.Library @ external/ComputeLibraryReceiving objects:  91% (133294/145230), 98.81 MiB | 11.89 MiB/s
Receiving objects: 100% (145230/145230), 108.39 MiB | 13.57 MiB/s, done.brary @ external/ComputeLibraryReceiving objects:  99% (143778/145230), 102.96 MiB | 11.60 MiB/s
Resolving deltas: 100% (9259/9259), done.:16 platform/external/ComputeLibrary @ external/ComputeLibraryResolving deltas:  85% (7871/9259)
Receiving objects: 100% (2126/2126), 825.53 KiB | 3.97 MiB/s, done.uteLibrary @ external/ComputeLibraryReceiving objects:  99% (2105/2126)
Resolving deltas: 100% (103/103), done.
Resolving deltas: 100% (145667/145667), done.platform/external/ComputeLibrary @ external/ComputeLibraryResolving deltas:  40% (51710/129273)
Receiving objects: 100% (1509/1509), 491.66 KiB | 4.43 MiB/s, done.ACK @ external/XNNPACKReceiving objects:  71% (1072/1509)
Resolving deltas: 100% (204/204), done.
Receiving objects: 100% (1275/1275), 348.76 KiB | 3.42 MiB/s, done.ACK @ external/XNNPACKReceiving objects:  29% (370/1275)
Resolving deltas: 100% (152/152), done.
Resolving deltas: 100% (129273/129273), done.MiB | 5.56 MiB/sl/XNNPACK @ external/XNNPACKReceiving objects:  26% (39272/151046), 5.57 MiB | 5.56 MiB/s
Receiving objects: 100% (12652/12652), 19.11 MiB | 34.50 MiB/s, done.K @ external/XNNPACKReceiving objects:   0% (1/12652)
Resolving deltas: 100% (6381/6381), done.72.99 MiB | 18.20 MiB/sNNPACK @ external/XNNPACKResolving deltas:  87% (5552/6381)
Receiving objects: 100% (151046/151046), 95.70 MiB | 19.04 MiB/s, done.@ external/XNNPACKReceiving objects:  85% (128390/151046), 79.29 MiB | 17.58 MiB/s
Receiving objects: 100% (8183/8183), 10.96 MiB | 7.32 MiB/s, done.le @ external/angleResolving deltas:  42% (53542/127477)
Resolving deltas: 100% (2810/2810), done.:25 platform/external/angle @ external/angleResolving deltas:  70% (1967/2810)
Receiving objects: 100% (21866/21866), 5.02 MiB | 5.52 MiB/s, done.e @ external/angleReceiving objects: 100% (21866/21866), 1.85 MiB | 3.69 MiB/s
Resolving deltas: 100% (14809/14809), done.8 platform/external/angle @ external/angleResolving deltas:  83% (12292/14809)
Receiving objects: 100% (24676/24676), 17.90 MiB | 5.14 MiB/s, done. @ external/angleReceiving objects:  92% (22702/24676), 15.51 MiB | 5.03 MiB/s
Resolving deltas: 100% (16340/16340), done. MiB | 4.73 MiB/ssl/angle @ external/angleReceiving objects:   2% (5703/285122), 2.38 MiB | 4.73 MiB/s
Receiving objects: 100% (57420/57420), 53.19 MiB | 8.31 MiB/s, done. @ external/angleReceiving objects:  99% (56846/57420), 51.52 MiB | 9.93 MiB/s
Resolving deltas: 100% (31237/31237), done.18 MiB | 6.92 MiB/s/angle @ external/angleReceiving objects:  30% (85537/285122), 36.18 MiB | 6.92 MiB/s
Receiving objects: 100% (1084/1084), 358.35 KiB | 3.32 MiB/s, done.e @ external/angleReceiving objects:  92% (998/1084)
Resolving deltas: 100% (307/307), done.
Resolving deltas: 100% (127477/127477), done.4 MiB | 7.73 MiB/s
Receiving objects: 100% (83935/83935), 14.49 MiB | 35.92 MiB/s, done. @ external/angleReceiving objects:  81% (67988/83935)
Receiving objects: 100% (49841/49841), 8.19 MiB | 12.96 MiB/s, done.
Resolving deltas: 100% (26690/26690), done.54 platform/external/angle @ external/angleResolving deltas:  96% (25623/26690)
Resolving deltas: 100% (43932/43932), done.54 platform/external/angle @ external/angleResolving deltas:  93% (40857/43932)
Receiving objects: 100% (48264/48264), 22.94 MiB | 46.71 MiB/s, done. @ external/angleReceiving objects:  99% (47782/48264)
Resolving deltas: 100% (30508/30508), done.2.59 MiB | 25.66 MiB/sngle @ external/angleResolving deltas:  58% (17695/30508)
Receiving objects: 100% (3450/3450), 2.96 MiB | 19.30 MiB/s, done.
Resolving deltas: 100% (974/974), done.
Receiving objects: 100% (122402/122402), 31.37 MiB | 38.33 MiB/s, done. external/angleReceiving objects:  73% (89354/122402)
Receiving objects: 100% (13043/13043), 5.87 MiB | 14.08 MiB/s, done.e @ external/angleReceiving objects:  58% (7565/13043)
Resolving deltas: 100% (3823/3823), done.
Resolving deltas: 100% (90858/90858), done.59 platform/external/angle @ external/angleResolving deltas:  99% (89952/90858)
Receiving objects: 100% (15011/15011), 5.34 MiB | 22.22 MiB/s, done.
Resolving deltas: 100% (5674/5674), done.
Receiving objects: 100% (2479/2479), 13.11 MiB | 36.59 MiB/s, done.le @ external/angleReceiving objects:  61% (173925/285122), 365.77 MiB | 34.05 MiB/s
Receiving objects: 100% (4109/4109), 1.51 MiB | 14.86 MiB/s, done.
Resolving deltas: 100% (1130/1130), done.1:02 platform/external/angle @ external/angleResolving deltas:  74% (837/1130)
Resolving deltas: 100% (910/910), done.| 1:02 platform/external/angle @ external/angleResolving deltas: 100% (910/910)
Receiving objects: 100% (9177/9177), 2.61 MiB | 34.64 MiB/s, done.gle @ external/angleReceiving objects:  63% (179627/285122), 436.65 MiB | 30.37 MiB/s
Resolving deltas: 100% (5865/5865), done.
Receiving objects: 100% (6389/6389), 5.76 MiB | 27.41 MiB/s, done.gle @ external/angleReceiving objects:  81% (5176/6389)
Resolving deltas: 100% (1387/1387), done..82 MiB | 37.81 MiB/s
Receiving objects: 100% (70528/70528), 94.71 MiB | 35.25 MiB/s, done. @ external/angleReceiving objects:  90% (63476/70528), 87.06 MiB | 34.82 MiB/s
Receiving objects: 100% (3990/3990), 1.14 MiB | 13.09 MiB/s, done.gle @ external/angleResolving deltas:  14% (8377/59827)
Resolving deltas: 100% (1828/1828), done.1:05 platform/external/angle @ external/angleResolving deltas:   0% (0/1828)
Receiving objects: 100% (2440/2440), 724.33 KiB | 7.17 MiB/s, done.le @ external/angleReceiving objects:   0% (1/2440)
Resolving deltas: 100% (1301/1301), done.
Receiving objects: 100% (2458/2458), 531.69 KiB | 2.89 MiB/s, done.
Resolving deltas: 100% (1409/1409), done.1:09 platform/external/angle @ external/angleResolving deltas:  86% (1212/1409)
Resolving deltas: 100% (59827/59827), done.2.02 MiB | 11.11 MiB/sngle @ external/angleResolving deltas:  95% (56836/59827)
Receiving objects: 100% (1947/1947), 9.81 MiB | 18.74 MiB/s, done.
Receiving objects: 100% (20651/20651), 7.94 MiB | 9.77 MiB/s, done.le @ external/angleReceiving objects:  80% (16521/20651), 3.05 MiB | 6.09 MiB/s
Resolving deltas: 100% (995/995), done.
Resolving deltas: 100% (15466/15466), done.13 platform/external/angle @ external/angleResolving deltas: 100% (15466/15466)
Receiving objects: 100% (342/342), 70.97 KiB | 14.19 MiB/s, done.
Resolving deltas: 100% (152/152), done.
Receiving objects: 100% (1068/1068), 252.57 KiB | 15.79 MiB/s, done.e @ external/angleReceiving objects:  12% (129/1068)
Resolving deltas: 100% (644/644), done.
Receiving objects: 100% (1111/1111), 342.11 KiB | 22.81 MiB/s, done.e @ external/angleReceiving objects:   0% (1/1111)
Resolving deltas: 100% (523/523), done.
Receiving objects: 100% (23186/23186), 4.48 MiB | 32.54 MiB/s, done.
Resolving deltas: 100% (10458/10458), done.16 platform/external/angle @ external/angleResolving deltas:  86% (8994/10458)
Receiving objects: 100% (36001/36001), 12.15 MiB | 19.68 MiB/s, done.
Receiving objects: 100% (8082/8082), 10.22 MiB | 8.39 MiB/s, done.gle @ external/angleReceiving objects:  95% (7678/8082), 2.81 MiB | 5.61 MiB/s
Resolving deltas: 100% (26802/26802), done.8.42 MiB | 17.28 MiB/sngle @ external/angleResolving deltas:  87% (23318/26802)
Resolving deltas: 100% (5362/5362), done.
Receiving objects: 100% (31492/31492), 11.49 MiB | 18.97 MiB/s, done. @ external/angleReceiving objects:  66% (20785/31492)
Resolving deltas: 100% (25828/25828), done. MiB | 8.59 MiB/sMiB/sngle @ external/angleResolving deltas:  74% (19113/25828)
Receiving objects: 100% (29159/29159), 18.80 MiB | 13.58 MiB/s, done. @ external/angleReceiving objects:  76% (22379/29159), 4.30 MiB | 8.59 MiB/s
Resolving deltas: 100% (19379/19379), done.1.89 MiB | 21.05 MiB/sngle @ external/angleResolving deltas:  68% (13178/19379)
Receiving objects: 100% (603/603), 234.03 KiB | 3.08 MiB/s, done.ngle @ external/angleReceiving objects:  69% (198748/285122), 888.67 MiB | 15.01 MiB/s
Resolving deltas: 100% (328/328), done.
Receiving objects: 100% (2261/2261), 1.19 MiB | 3.90 MiB/s, done.ngle @ external/angleReceiving objects:  61% (17109/28046), 5.38 MiB | 10.74 MiB/s
Resolving deltas: 100% (89/89), done.
Receiving objects: 100% (28046/28046), 22.03 MiB | 8.72 MiB/s, done.e @ external/angleReceiving objects:  82% (22998/28046), 12.63 MiB | 8.41 MiB/s
Resolving deltas: 100% (10973/10973), done.9.10 MiB | 13.25 MiB/sngle @ external/angleResolving deltas:  82% (8998/10973)
Receiving objects: 100% (2683/2683), 1.09 MiB | 9.99 MiB/s, done.ngle @ external/angleReceiving objects:  72% (207027/285122), 1.00 GiB | 9.14 MiB/s    
Resolving deltas: 100% (1447/1447), done.1.01 GiB | 8.68 MiB/s
Receiving objects: 100% (9021/9021), 38.36 MiB | 14.77 MiB/s, done.le @ external/angleReceiving objects:  49% (13073/26679), 39.56 MiB | 13.18 MiB/s
Resolving deltas: 100% (4965/4965), done.1.09 GiB | 9.73 MiB/s /angle @ external/angleResolving deltas:  83% (4121/4965)
Receiving objects: 100% (285122/285122), 1.16 GiB | 17.25 MiB/s, done.@ external/angleReceiving objects:  95% (270866/285122), 1.15 GiB | 13.47 MiB/s
Receiving objects: 100% (3634/3634), 1.26 MiB | 10.41 MiB/s, done.gle @ external/angleReceiving objects:  96% (3489/3634)
Resolving deltas: 100% (387/387), done.
Receiving objects: 100% (2892/2892), 2.11 MiB | 9.20 MiB/s, done.ngle @ external/angleResolving deltas:  57% (114544/200954)
Resolving deltas: 100% (386/386), done.
Receiving objects: 100% (2526/2526), 4.31 MiB | 8.87 MiB/s, done.ngle @ external/angleReceiving objects:   0% (1/2526)
Resolving deltas: 100% (203/203), done.
Receiving objects: 100% (26679/26679), 376.01 MiB | 9.49 MiB/s, done. @ external/angleReceiving objects:  92% (24545/26679), 371.48 MiB | 8.87 MiB/s
Receiving objects: 100% (34520/34520), 47.79 MiB | 6.45 MiB/s, done.e @ external/angleResolving deltas:  52% (6659/12804)
Resolving deltas: 100% (12804/12804), done.8.48 MiB | 4.74 MiB/sangle @ external/angleResolving deltas:  77% (154835/200954)
Resolving deltas: 100% (24836/24836), done.0.42 MiB | 5.31 MiB/sangle @ external/angleResolving deltas:  78% (158531/200954)
Receiving objects: 100% (2155/2155), 745.48 KiB | 6.21 MiB/s, done.le @ external/angleReceiving objects:  53% (1143/2155)
Resolving deltas: 100% (164/164), done.
Receiving objects: 100% (473865/473865), 778.14 MiB | 13.42 MiB/s, done.
Receiving objects: 100% (25032/25032), 13.85 MiB | 6.86 MiB/s, done.e @ external/angleReceiving objects:  90% (22529/25032), 8.23 MiB | 5.48 MiB/s
Resolving deltas: 100% (18650/18650), done.43 platform/external/angle @ external/angleResolving deltas:  94% (188897/200954)
Receiving objects: 100% (3825/3825), 816.37 KiB | 4.12 MiB/s, done.le @ external/angleReceiving objects:   0% (1/3825)
Resolving deltas: 100% (1415/1415), done.
Resolving deltas: 100% (200954/200954), done. platform/external/angle @ external/angleResolving deltas:  99% (198946/200954)
Resolving deltas: 100% (322857/322857), done.2 MiB | 20.84 MiB/sangle @ external/angleResolving deltas:  99% (319629/322857)
Receiving objects: 100% (2123/2123), 656.10 KiB | 31.24 MiB/s, done.
Resolving deltas: 100% (4/4), done.
Receiving objects: 100% (22858/22858), 135.91 MiB | 18.80 MiB/s, done.st @ external/autotestReceiving objects:  96% (22120/22858), 132.93 MiB | 19.04 MiB/s
Resolving deltas: 100% (9007/9007), done.1:40 platform/external/autotest @ external/autotestResolving deltas:  74% (6666/9007)
Receiving objects: 100% (1998/1998), 879.62 KiB | 23.77 MiB/s, done.test @ external/autotestReceiving objects:   0% (1/1998)
Resolving deltas: 100% (478/478), done.
Receiving objects: 100% (50825/50825), 29.22 MiB | 38.16 MiB/s, done.est @ external/autotestReceiving objects:  39% (19822/50825)
Resolving deltas: 100% (17470/17470), done.15 platform/external/clang @ external/clangResolving deltas:  83% (14501/17470)
Receiving objects: 100% (2125/2125), 882.69 KiB | 29.42 MiB/s, done.
Resolving deltas: 100% (43/43), done.
Receiving objects: 100% (826704/826704), 330.44 MiB | 25.67 MiB/s, done.external/clangReceiving objects:  85% (702699/826704), 294.55 MiB | 26.90 MiB/s
Receiving objects: 100% (3511/3511), 1.59 MiB | 7.66 MiB/s, done.lang @ external/clangReceiving objects:   0% (1/3511)
Resolving deltas: 100% (1341/1341), done.
Receiving objects: 100% (7012/7012), 5.05 MiB | 4.63 MiB/s, done.lang @ external/clangReceiving objects:  97% (6802/7012), 4.75 MiB | 4.74 MiB/s
Resolving deltas: 100% (4708/4708), done.0:25 platform/external/clang @ external/clangResolving deltas:  44% (2072/4708)
Receiving objects: 100% (66335/66335), 90.74 MiB | 12.97 MiB/s, done. @ external/clangReceiving objects:  94% (62355/66335), 86.14 MiB | 14.60 MiB/s
Resolving deltas: 100% (40881/40881), done.44 platform/external/clang @ external/clangResolving deltas:  95% (38837/40881)
Resolving deltas: 100% (639871/639871), done. platform/external/clang @ external/clangResolving deltas: 100% (639871/639871)
Receiving objects: 100% (88634/88634), 609.01 MiB | 7.86 MiB/s, done.mium-webview @ external/chromium-webviewReceiving objects:  99% (87748/88634), 604.77 MiB | 10.70 MiB/s
Receiving objects: 100% (26793/26793), 384.33 MiB | 25.92 MiB/s, done.ium-webview @ external/chromium-webviewReceiving objects:  96% (25722/26793), 364.87 MiB | 30.53 MiB/s
Resolving deltas: 100% (17599/17599), done.:54 platform/external/chromium-webview @ external/chromium-webviewResolving deltas: 100% (17599/17599)
Receiving objects: 100% (8327/8327), 4.06 MiB | 26.01 MiB/s, done.hromium-webview @ external/chromium-webviewReceiving objects:  52% (4331/8327)
Resolving deltas: 100% (5621/5621), done.
Receiving objects: 100% (1748/1748), 476.10 KiB | 31.74 MiB/s, done.net @ external/cronetReceiving objects:   0% (1/1748)
Resolving deltas: 100% (293/293), done.
Resolving deltas: 100% (41137/41137), done.:54 platform/external/cronet @ external/cronetResolving deltas: 100% (41137/41137)
Receiving objects: 100% (106778/106778), 21.87 MiB | 35.60 MiB/s, done. external/deqpReceiving objects:  27% (28831/106778)
Resolving deltas: 100% (84561/84561), done.:23 platform/external/deqp @ external/deqpResolving deltas:  77% (65112/84561)
Receiving objects: 100% (53093/53093), 58.44 MiB | 45.51 MiB/s, done. @ external/deqpReceiving objects:  94% (49908/53093), 41.60 MiB | 41.59 MiB/s
Receiving objects: 100% (1643/1643), 565.50 KiB | 7.25 MiB/s, done.qp @ external/deqpReceiving objects:  19% (17000/89472)
Resolving deltas: 100% (2/2), done.)), 7.77 MiB | 15.52 MiB/s
Resolving deltas: 100% (43812/43812), done.2 MiB | 15.44 MiB/sal/deqp @ external/deqpResolving deltas:  91% (39869/43812)
Receiving objects: 100% (2809/2809), 2.50 MiB | 30.88 MiB/s, done.eqp @ external/deqpReceiving objects:  91% (81420/89472), 38.62 MiB | 15.44 MiB/s
Resolving deltas: 100% (134/134), done.
Receiving objects: 100% (89472/89472), 60.54 MiB | 18.86 MiB/s, done.
Resolving deltas: 100% (52539/52539), done.:31 platform/external/deqp @ external/deqpResolving deltas:  98% (51489/52539)
Receiving objects: 100% (3055/3055), 1.41 MiB | 33.69 MiB/s, done.
Resolving deltas: 100% (248/248), done.
Receiving objects: 100% (5866/5866), 1.97 MiB | 32.61 MiB/s, done.
Resolving deltas: 100% (1226/1226), done.
Receiving objects: 100% (5730/5730), 6.93 MiB | 48.93 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/5730)
Resolving deltas: 100% (1082/1082), done.
Receiving objects: 100% (12087/12087), 5.70 MiB | 36.94 MiB/s, done.
Resolving deltas: 100% (3157/3157), done.
Receiving objects: 100% (10062/10062), 4.33 MiB | 32.85 MiB/s, done.p @ external/deqpReceiving objects:  56% (121009/216087), 14.04 MiB | 28.06 MiB/s
Resolving deltas: 100% (4243/4243), done.
Receiving objects: 100% (216087/216087), 98.33 MiB | 36.95 MiB/s, done. external/deqpReceiving objects:  74% (161601/216087), 46.80 MiB | 31.20 MiB/s
Receiving objects: 100% (1577/1577), 552.18 KiB | 8.12 MiB/s, done.qp @ external/deqpResolving deltas:  14% (24081/171994)
Resolving deltas: 100% (158/158), done.
Resolving deltas: 100% (171994/171994), done.5 platform/external/deqp @ external/deqpResolving deltas:  98% (168556/171994)
Receiving objects: 100% (61744/61744), 55.67 MiB | 26.92 MiB/s, done. @ external/deqpReceiving objects:  70% (43221/61744), 33.73 MiB | 22.40 MiB/s
Resolving deltas: 100% (45356/45356), done.:53 platform/external/deqp @ external/deqpResolving deltas:  98% (44449/45356)
Receiving objects: 100% (2131/2131), 679.78 KiB | 30.90 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/117740)
Resolving deltas: 100% (50/50), done.
Receiving objects: 100% (117740/117740), 93.33 MiB | 46.71 MiB/s, done. external/deqpReceiving objects: 100% (117740/117740), 71.50 MiB | 47.66 MiB/s
Resolving deltas: 100% (97808/97808), done.:01 platform/external/deqp @ external/deqpReceiving objects:  83% (146584/174773), 221.39 MiB | 9.45 MiB/s
Receiving objects: 100% (2379/2379), 84.38 MiB | 76.88 MiB/s, done.qp @ external/deqpReceiving objects:  88% (2094/2379)
Resolving deltas: 100% (118/118), done.
Receiving objects: 100% (29820/29820), 24.24 MiB | 48.01 MiB/s, done. @ external/deqpReceiving objects:   0% (1/29820)
Receiving objects: 100% (937/937), 322.21 KiB | 4.74 MiB/s, done.
Resolving deltas: 100% (66/66), done.
Resolving deltas: 100% (22082/22082), done.1 MiB | 30.50 MiB/sal/deqp @ external/deqpResolving deltas:  73% (16120/22082)
Receiving objects: 100% (4709/4709), 2.64 MiB | 32.56 MiB/s, done.eqp @ external/deqpReceiving objects:  91% (57847/63568), 42.20 MiB | 27.94 MiB/s
Resolving deltas: 100% (2413/2413), done.
Receiving objects: 100% (2570/2570), 1.37 MiB | 37.02 MiB/s, done.eqp @ external/deqpReceiving objects:  91% (58034/63568), 136.82 MiB | 45.46 MiB/s
Resolving deltas: 100% (175/175), done.
Receiving objects: 100% (2844/2844), 741.18 KiB | 32.22 MiB/s, done.
Resolving deltas: 100% (1658/1658), done.278.84 MiB | 6.35 MiB/s
Receiving objects: 100% (4523/4523), 2.23 MiB | 36.86 MiB/s, done.eqp @ external/deqpReceiving objects:  92% (58791/63568), 248.30 MiB | 51.25 MiB/s
Resolving deltas: 100% (1760/1760), done.
Receiving objects: 100% (16737/16737), 35.88 MiB | 52.41 MiB/s, done. @ external/deqpReceiving objects:  48% (8034/16737)
Resolving deltas: 100% (8737/8737), done. 2:13 platform/external/deqp @ external/deqpResolving deltas:  91% (7951/8737)
Receiving objects: 100% (2400/2400), 849.69 KiB | 32.68 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/2400)
Resolving deltas: 100% (64/64), done.
Receiving objects: 100% (2013/2013), 802.38 KiB | 29.72 MiB/s, done.p @ external/deqpReceiving objects:  95% (60702/63568), 490.93 MiB | 57.88 MiB/s
Resolving deltas: 100% (36/36), done.
Receiving objects: 100% (24611/24611), 16.89 MiB | 17.92 MiB/s, done. @ external/deqpReceiving objects:  96% (61026/63568), 519.98 MiB | 60.37 MiB/s
Resolving deltas: 100% (15897/15897), done.14 MiB | 47.31 MiB/sl/deqp @ external/deqpResolving deltas:  84% (13355/15897)
Receiving objects: 100% (808/808), 294.74 KiB | 22.67 MiB/s, done.
Resolving deltas: 100% (23/23), done.
Receiving objects: 100% (758/758), 1.37 MiB | 66.88 MiB/s, done./deqp @ external/deqpReceiving objects:  96% (61315/63568), 634.50 MiB | 50.39 MiB/s
Resolving deltas: 100% (12/12), done.
Receiving objects: 100% (9636/9636), 4.83 MiB | 20.80 MiB/s, done.eqp @ external/deqpReceiving objects:  87% (8384/9636)
Resolving deltas: 100% (4048/4048), done. 2:20 platform/external/deqp @ external/deqpResolving deltas:  90% (3644/4048)
Receiving objects: 100% (42376/42376), 9.48 MiB | 37.32 MiB/s, done.p @ external/deqpReceiving objects:  73% (30935/42376)
Resolving deltas: 100% (32731/32731), done.91 MiB | 60.92 MiB/sl/deqp @ external/deqpResolving deltas:  22% (7201/32731)
Receiving objects: 100% (63568/63568), 881.34 MiB | 55.62 MiB/s, done.@ external/deqpReceiving objects:  86% (151885/174773), 360.68 MiB | 7.02 MiB/s
Resolving deltas: 100% (33779/33779), done.:23 platform/external/deqp @ external/deqpResolving deltas:  99% (33590/33779)
Receiving objects: 100% (1074/1074), 474.23 KiB | 29.64 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/1074)
Resolving deltas: 100% (95/95), done.
Receiving objects: 100% (114/114), 6.75 MiB | 36.36 MiB/s, done./deqp @ external/deqpReceiving objects:   0% (1/114)
Resolving deltas: 100% (17/17), done.
Receiving objects: 100% (933/933), 330.73 KiB | 17.41 MiB/s, done.eqp @ external/deqpReceiving objects:  78% (27347/35059), 12.98 MiB | 25.80 MiB/s
Resolving deltas: 100% (35/35), done.
Receiving objects: 100% (35059/35059), 26.09 MiB | 17.18 MiB/s, done. @ external/deqpReceiving objects:  89% (31203/35059), 18.18 MiB | 18.11 MiB/s
Receiving objects: 100% (84080/84080), 20.84 MiB | 11.10 MiB/s, done. @ external/deqpResolving deltas:  76% (16114/21202)
Resolving deltas: 100% (21202/21202), done.:30 platform/external/deqp @ external/deqpResolving deltas:  15% (10209/68055)
Receiving objects: 100% (7220/7220), 1.94 MiB | 4.86 MiB/s, done.deqp @ external/deqpReceiving objects:  71% (5127/7220)
Resolving deltas: 100% (3248/3248), done.
Resolving deltas: 100% (68055/68055), done.:38 platform/external/deqp @ external/deqpResolving deltas:  98% (66694/68055)
Receiving objects: 100% (1488/1488), 318.20 KiB | 26.52 MiB/s, done.p @ external/deqpReceiving objects:  22% (7532/34234)
Resolving deltas: 100% (374/374), done.
Receiving objects: 100% (34234/34234), 16.10 MiB | 12.14 MiB/s, done. @ external/deqpReceiving objects:  80% (27721/34234), 4.32 MiB | 8.63 MiB/s
Resolving deltas: 100% (21031/21031), done.:41 platform/external/deqp @ external/deqpResolving deltas:  80% (16826/21031)
Receiving objects: 100% (2529/2529), 870.94 KiB | 32.26 MiB/s, done.p @ external/deqpReceiving objects:  96% (780/812), 13.23 MiB | 26.45 MiB/s
Resolving deltas: 100% (79/79), done.
Receiving objects: 100% (812/812), 94.23 MiB | 44.28 MiB/s, done.deqp @ external/deqpReceiving objects:  99% (804/812), 69.34 MiB | 46.25 MiB/s
Resolving deltas: 100% (27/27), done.
Receiving objects: 100% (16403/16403), 12.90 MiB | 12.57 MiB/s, done. @ external/deqpReceiving objects:  61% (10006/16403)
Receiving objects: 100% (2293/2293), 699.22 KiB | 6.92 MiB/s, done.qp @ external/deqpResolving deltas:  51% (4569/8958)
Resolving deltas: 100% (532/532), done.
Resolving deltas: 100% (8958/8958), done.
Receiving objects: 100% (3797/3797), 1.63 MiB | 13.82 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/3797)
Resolving deltas: 100% (1650/1650), done.
Receiving objects: 100% (2670/2670), 3.01 MiB | 9.43 MiB/s, done.deqp @ external/deqpReceiving objects:  96% (2564/2670)
Resolving deltas: 100% (188/188), done.
Receiving objects: 100% (2470/2470), 1.30 MiB | 12.37 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/2470)
Resolving deltas: 100% (101/101), done.
Receiving objects: 100% (1115/1115), 785.70 KiB | 7.86 MiB/s, done.qp @ external/deqpReceiving objects:  74% (44625/60304), 36.27 MiB | 18.13 MiB/s
Resolving deltas: 100% (8/8), done.4), 46.00 MiB | 18.39 MiB/s
Receiving objects: 100% (60304/60304), 73.17 MiB | 18.20 MiB/s, done. @ external/deqpReceiving objects:  84% (50656/60304), 56.00 MiB | 18.66 MiB/s
Resolving deltas: 100% (34202/34202), done.4 MiB | 7.21 MiB/snal/deqp @ external/deqpResolving deltas:  83% (28388/34202)
Receiving objects: 100% (1970/1970), 646.58 KiB | 8.62 MiB/s, done.qp @ external/deqpReceiving objects:  97% (27347/27922), 24.55 MiB | 8.17 MiB/s
Resolving deltas: 100% (5/5), done.
Receiving objects: 100% (27922/27922), 44.95 MiB | 7.49 MiB/s, done.p @ external/deqpReceiving objects:  98% (27364/27922), 43.43 MiB | 7.91 MiB/s
Receiving objects: 100% (1726/1726), 788.32 KiB | 7.51 MiB/s, done.
Resolving deltas: 100% (804/804), done. | 3:02 platform/external/deqp @ external/deqpResolving deltas:  71% (573/804)
Receiving objects: 100% (1877/1877), 645.16 KiB | 6.39 MiB/s, done.qp @ external/deqpResolving deltas:  89% (16320/18336)
Resolving deltas: 100% (2/2), done.)
Resolving deltas: 100% (18336/18336), done.:04 platform/external/deqp @ external/deqpResolving deltas:  97% (17787/18336)
Receiving objects: 100% (24833/24833), 14.13 MiB | 18.34 MiB/s, done. @ external/deqpReceiving objects: 100% (24833/24833), 11.36 MiB | 20.29 MiB/s
Resolving deltas: 100% (17826/17826), done.:07 platform/external/deqp @ external/deqpResolving deltas:  82% (14618/17826)
Receiving objects: 100% (1991/1991), 681.92 KiB | 8.63 MiB/s, done.
Resolving deltas: 100% (5/5), done.
Receiving objects: 100% (1202/1202), 408.12 KiB | 29.15 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/1202)
Resolving deltas: 100% (10/10), done.
Receiving objects: 100% (1196/1196), 475.87 KiB | 29.74 MiB/s, done.p @ external/deqpReceiving objects:  88% (154076/174773), 489.91 MiB | 3.05 MiB/s
Resolving deltas: 100% (8/8), done.
Receiving objects: 100% (2023/2023), 809.88 KiB | 32.39 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/10131)
Resolving deltas: 100% (15/15), done. 5.01 MiB | 8.86 MiB/s
Receiving objects: 100% (10131/10131), 5.13 MiB | 9.04 MiB/s, done.
Resolving deltas: 100% (4763/4763), done. 3:11 platform/external/deqp @ external/deqpResolving deltas:  77% (3668/4763)
Receiving objects: 100% (1123/1123), 1.21 MiB | 38.74 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/1123)
Resolving deltas: 100% (8/8), done.
Receiving objects: 100% (1107/1107), 1.31 MiB | 14.26 MiB/s, done.eqp @ external/deqpReceiving objects: 100% (1107/1107)
Resolving deltas: 100% (5/5), done.
Receiving objects: 100% (1102/1102), 357.22 KiB | 4.89 MiB/s, done.qp @ external/deqpReceiving objects:   0% (1/1102)
Resolving deltas: 100% (5/5), done.
Receiving objects: 100% (12874/12874), 2.85 MiB | 31.35 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/12874)
Resolving deltas: 100% (8972/8972), done. 3:14 platform/external/deqp @ external/deqpResolving deltas:  83% (7447/8972)
Receiving objects: 100% (1111/1111), 379.76 KiB | 25.32 MiB/s, done.p @ external/deqpReceiving objects:  88% (154104/174773), 509.28 MiB | 3.66 MiB/s
Resolving deltas: 100% (6/6), done.
Receiving objects: 100% (1212/1212), 772.29 KiB | 8.58 MiB/s, done.qp @ external/deqpReceiving objects:   0% (1/1212)
Resolving deltas: 100% (9/9), done.
Receiving objects: 100% (10873/10873), 1.87 MiB | 25.88 MiB/s, done.p @ external/deqpReceiving objects:  17% (1849/10873)
Resolving deltas: 100% (4446/4446), done.
Receiving objects: 100% (1198/1198), 899.81 KiB | 37.49 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/1211)
Resolving deltas: 100% (7/7), done.
Receiving objects: 100% (1211/1211), 2.89 MiB | 29.29 MiB/s, done.
Resolving deltas: 100% (13/13), done.
Receiving objects: 100% (33431/33431), 6.67 MiB | 11.15 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/33431)
Resolving deltas: 100% (19867/19867), done.:20 platform/external/deqp @ external/deqpResolving deltas:  98% (19470/19867)
Receiving objects: 100% (1204/1204), 690.49 KiB | 10.46 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/1204)
Resolving deltas: 100% (11/11), done.
Receiving objects: 100% (2728/2728), 3.14 MiB | 15.91 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/29983)
Resolving deltas: 100% (851/851), done. | 3:22 platform/external/deqp @ external/deqpReceiving objects:  80% (23987/29983), 7.77 MiB | 15.56 MiB/s
Receiving objects: 100% (29983/29983), 14.56 MiB | 13.30 MiB/s, done.
Receiving objects: 100% (30902/30902), 6.92 MiB | 6.84 MiB/s, done.qp @ external/deqpReceiving objects:  84% (25958/30902), 2.89 MiB | 5.77 MiB/s
Resolving deltas: 100% (19396/19396), done.:25 platform/external/deqp @ external/deqpResolving deltas:   3% (488/16255)
Resolving deltas: 100% (16255/16255), done.:26 platform/external/deqp @ external/deqpResolving deltas:  99% (16093/16255)
Receiving objects: 100% (2618/2618), 807.78 KiB | 32.31 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/2618)
Resolving deltas: 100% (191/191), done.
Receiving objects: 100% (4399/4399), 2.04 MiB | 35.99 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/4399)
Resolving deltas: 100% (1514/1514), done.
Receiving objects: 100% (133172/133172), 79.90 MiB | 43.59 MiB/s, done. external/deqpReceiving objects:  20% (20846/104226)
Resolving deltas: 100% (73427/73427), done.19 MiB | 19.60 MiB/sl/deqp @ external/deqpReceiving objects:  88% (154403/174773), 561.51 MiB | 3.24 MiB/s
Receiving objects: 100% (104226/104226), 93.28 MiB | 21.93 MiB/s, done. external/deqpReceiving objects:  98% (102142/104226), 85.08 MiB | 21.11 MiB/s
Resolving deltas: 100% (77008/77008), done..34 MiB | 19.82 MiB/s/deqp @ external/deqpReceiving objects:  88% (154408/174773), 572.20 MiB | 2.59 MiB/s
Receiving objects: 100% (34504/34504), 49.07 MiB | 56.27 MiB/s, done. @ external/deqpReceiving objects:  88% (154431/174773), 592.19 MiB | 4.67 MiB/s
Resolving deltas: 100% (22346/22346), done.0.99 MiB | 27.04 MiB/sdeqp @ external/deqpResolving deltas:  55% (12291/22346)
Receiving objects: 100% (2430/2430), 1.61 MiB | 18.53 MiB/s, done.eqp @ external/deqpReceiving objects:  88% (154436/174773), 597.83 MiB | 4.13 MiB/s
Resolving deltas: 100% (176/176), done., 230.62 MiB | 20.25 MiB/s
Receiving objects: 100% (3017/3017), 1.17 MiB | 12.12 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/3017)
Resolving deltas: 100% (350/350), done., 251.69 MiB | 19.55 MiB/s
Receiving objects: 100% (7801/7801), 8.37 MiB | 10.09 MiB/s, done.eqp @ external/deqpReceiving objects:  85% (6631/7801), 4.72 MiB | 9.42 MiB/s
Resolving deltas: 100% (2919/2919), done. 3:47 platform/external/deqp @ external/deqpResolving deltas:  96% (2803/2919)
Receiving objects: 100% (638261/638261), 305.94 MiB | 19.94 MiB/s, done.external/deqpReceiving objects:  98% (627006/638261), 298.80 MiB | 15.11 MiB/s
Receiving objects: 100% (8477/8477), 9.74 MiB | 9.63 MiB/s, done.deqp @ external/deqpReceiving objects:  74% (6273/8477), 4.13 MiB | 8.25 MiB/s
Resolving deltas: 100% (5491/5491), done. 3:55 platform/external/deqp @ external/deqpResolving deltas:  92% (5052/5491)
Receiving objects: 100% (31031/31031), 6.26 MiB | 5.19 MiB/s, done.qp @ external/deqpReceiving objects:  18% (5586/31031)
Resolving deltas: 100% (21865/21865), done.:07 platform/external/deqp @ external/deqpResolving deltas:  92% (20116/21865)
Receiving objects: 100% (3151/3151), 2.00 MiB | 5.31 MiB/s, done.seqp @ external/deqpReceiving objects:   0% (1/3151)
Resolving deltas: 100% (555/555), done. | 4:17 platform/external/deqp @ external/deqpResolving deltas:  94% (523/555)
Receiving objects: 100% (27591/27591), 5.70 MiB | 9.51 MiB/s, done.qp @ external/deqpReceiving objects:   0% (1/27591)
Resolving deltas: 100% (19018/19018), done.4.68 MiB | 912.00 KiB/seqp @ external/deqpResolving deltas:  89% (16927/19018)
Receiving objects: 100% (7115/7115), 3.46 MiB | 3.91 MiB/s, done.deqp @ external/deqpReceiving objects:  78% (5550/7115), 2.13 MiB | 4.22 MiB/s
Resolving deltas: 100% (3488/3488), done. 4:42 platform/external/deqp @ external/deqpResolving deltas:  70% (2442/3488)
Receiving objects: 100% (4261/4261), 1.18 MiB | 5.89 MiB/s, done.deqp @ external/deqpReceiving objects:  78% (3324/4261)
Resolving deltas: 100% (1575/1575), done.
Receiving objects: 100% (5988/5988), 2.03 MiB | 5.12 MiB/s, done.deqp @ external/deqpReceiving objects:   0% (1/5988)
Resolving deltas: 100% (3103/3103), done..64 MiB | 3.63 MiB/sKiB/seqp @ external/deqpResolving deltas:  44% (1366/3103)
Resolving deltas: 100% (518096/518096), done.4 platform/external/deqp @ external/deqpResolving deltas: 100% (518096/518096)
Receiving objects: 100% (25476/25476), 12.13 MiB | 15.71 MiB/s, done. @ external/deqpReceiving objects:  70% (17834/25476)
Resolving deltas: 100% (13977/13977), done.:07 platform/external/deqp @ external/deqpReceiving objects:  88% (154582/174773), 689.52 MiB | 1.47 MiB/s
Receiving objects: 100% (98839/98839), 42.94 MiB | 45.10 MiB/s, done. @ external/deqpReceiving objects:  88% (86979/98839), 19.97 MiB | 39.93 MiB/s
Resolving deltas: 100% (57370/57370), done.:14 platform/external/deqp @ external/deqpResolving deltas:  89% (51062/57370)
Receiving objects: 100% (48782/48782), 9.12 MiB | 44.25 MiB/s, done.p @ external/deqpReceiving objects:  88% (154795/174773), 728.50 MiB | 5.44 MiB/s
Resolving deltas: 100% (29783/29783), done..43 MiB | 28.84 MiB/s/deqp @ external/deqpResolving deltas:  22% (6553/29783)
Receiving objects: 100% (144489/144489), 46.16 MiB | 30.57 MiB/s, done. external/deqpReceiving objects:  88% (127151/144489), 25.88 MiB | 25.88 MiB/s
Resolving deltas: 100% (72863/72863), done..79 MiB | 34.25 MiB/s/deqp @ external/deqpResolving deltas:  89% (64849/72863)
Receiving objects: 100% (2714/2714), 3.15 MiB | 53.73 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/2714)
Resolving deltas: 100% (270/270), done.
Receiving objects: 100% (7964/7964), 1.56 MiB | 37.98 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/7964)
Resolving deltas: 100% (2581/2581), done.
Receiving objects: 100% (133321/133321), 40.69 MiB | 48.68 MiB/s, done. external/deqpReceiving objects:  75% (99991/133321)
Receiving objects: 100% (6956/6956), 2.12 MiB | 15.37 MiB/s, done.eqp @ external/deqpResolving deltas:  57% (43446/76220)
Resolving deltas: 100% (137/137), done.
Resolving deltas: 100% (76220/76220), done.:25 platform/external/deqp @ external/deqpResolving deltas:  93% (70885/76220)
Receiving objects: 100% (2575/2575), 1.28 MiB | 14.84 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/2575)
Resolving deltas: 100% (373/373), done.
Receiving objects: 100% (17039/17039), 5.36 MiB | 13.61 MiB/s, done.p @ external/deqpReceiving objects:  94% (16017/17039)
Resolving deltas: 100% (8060/8060), done.789.24 MiB | 3.62 MiB/s
Receiving objects: 100% (9796/9796), 90.25 MiB | 30.70 MiB/s, done.qp @ external/deqpReceiving objects:  92% (9013/9796), 68.65 MiB | 27.46 MiB/s
Resolving deltas: 100% (3561/3561), done. 5:33 platform/external/deqp @ external/deqpReceiving objects:  59% (88796/148419), 824.49 MiB | 20.61 MiB/s
Receiving objects: 100% (2442/2442), 928.35 KiB | 10.31 MiB/s, done.p @ external/deqpReceiving objects:   0% (1/2442)
Resolving deltas: 100% (211/211), done.
Receiving objects: 100% (2024/2024), 643.51 KiB | 23.83 MiB/s, done.p @ external/deqpReceiving objects:  83% (1680/2024)
Resolving deltas: 100% (14/14), done.
Receiving objects: 100% (30522/30522), 6.89 MiB | 16.96 MiB/s, done.
Resolving deltas: 100% (22369/22369), done..00 MiB | 16.89 MiB/s/deqp @ external/deqpResolving deltas:  82% (18551/22369)
Receiving objects: 100% (3035/3035), 1.20 MiB | 12.46 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/3035)
Resolving deltas: 100% (152/152), done.
Receiving objects: 100% (9377/9377), 2.01 MiB | 17.00 MiB/s, done.
Resolving deltas: 100% (4862/4862), done. 5:43 platform/external/deqp @ external/deqpResolving deltas:  10% (487/4862)
Receiving objects: 100% (2009/2009), 1.64 MiB | 15.82 MiB/s, done.eqp @ external/deqpReceiving objects:   0% (1/2009)
Resolving deltas: 100% (11/11), done.
Receiving objects: 100% (2547/2547), 773.05 KiB | 7.89 MiB/s, done.qp @ external/deqpReceiving objects:  88% (155250/174773), 831.23 MiB | 2.77 MiB/s
Resolving deltas: 100% (116/116), done.
Receiving objects: 100% (2668/2668), 838.57 KiB | 8.47 MiB/s, done.qp @ external/deqpReceiving objects:  62% (93189/148419), 1.09 GiB | 17.20 MiB/s
Resolving deltas: 100% (579/579), done. | 5:50 platform/external/deqp @ external/deqpResolving deltas:  30% (174/579)
Receiving objects: 100% (9259/9259), 7.02 MiB | 17.46 MiB/s, done.eqp @ external/deqpReceiving objects:  90% (8334/9259)
Resolving deltas: 100% (5213/5213), done.
Receiving objects: 100% (3691/3691), 1.36 MiB | 8.90 MiB/s, done.deqp @ external/deqpReceiving objects:   0% (1/3691)
Resolving deltas: 100% (307/307), done.
Receiving objects: 100% (2008/2008), 1.59 MiB | 14.69 MiB/s, done.eqp @ external/deqpReceiving objects:  88% (155277/174773), 855.09 MiB | 2.63 MiB/s
Resolving deltas: 100% (97/97), done.
Receiving objects: 100% (12610/12610), 19.05 MiB | 10.60 MiB/s, done. @ external/deqpReceiving objects:  72% (9080/12610), 11.00 MiB | 10.99 MiB/s
Resolving deltas: 100% (3852/3852), done.869.96 MiB | 2.65 MiB/s/deqp @ external/deqpResolving deltas:  17% (655/3852)
Receiving objects: 100% (45974/45974), 18.56 MiB | 12.50 MiB/s, done. @ external/deqpReceiving objects:  82% (37699/45974), 12.79 MiB | 12.78 MiB/s
Resolving deltas: 100% (30250/30250), done.:11 platform/external/deqp @ external/deqpResolving deltas:  97% (29343/30250)
Receiving objects: 100% (961/961), 4.98 MiB | 37.19 MiB/s, done./deqp @ external/deqpReceiving objects:  89% (155690/174773), 891.12 MiB | 1.86 MiB/s
Resolving deltas: 100% (3/3), done.
Receiving objects: 100% (2304/2304), 759.06 KiB | 4.31 MiB/s, done.qp @ external/deqpReceiving objects:   0% (1/2304)
Resolving deltas: 100% (76/76), done.
Receiving objects: 100% (26651/26651), 17.82 MiB | 16.50 MiB/s, done. @ external/deqpReceiving objects:  91% (24253/26651), 6.36 MiB | 12.71 MiB/s
Resolving deltas: 100% (11957/11957), done.:23 platform/external/deqp @ external/deqpReceiving objects:  89% (155713/174773), 912.60 MiB | 2.11 MiB/s
Receiving objects: 100% (6206/6206), 50.78 MiB | 21.87 MiB/s, done.qp @ external/deqpReceiving objects:  89% (155745/174773), 926.28 MiB | 2.68 MiB/s
Resolving deltas: 100% (2567/2567), done. 6:29 platform/external/deqp @ external/deqpResolving deltas:  99% (2542/2567)
Receiving objects: 100% (617/617), 2.07 MiB | 16.71 MiB/s, done./deqp @ external/deqpReceiving objects:  89% (155748/174773), 931.45 MiB | 2.24 MiB/s
Resolving deltas: 100% (157/157), done.
fatal: write error: No space left on device9.01 MiB | 2.12 MiB/s/deqp @ external/deqpReceiving objects:  62% (155234/246509), 39.54 MiB | 11.23 MiB/s
error: index-pack died
fatal: write error: No space left on device
fatal: write error: No space left on device
error: index-pack died
error: Cannot fetch platform/external/kotlinc (OSError: [Errno 28] No space left on device)
error: index-pack died
error: Cannot fetch platform/external/libaom (OSError: [Errno 28] No space left on device)
error: Cannot fetch platform/external/deqp (OSError: [Errno 28] No space left on device)
fatal: write error: No space left on device
error: index-pack died
multiprocessing.pool.RemoteTraceback: 
"""
OSError: [Errno 28] No space left on device

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/usr/lib/python3.10/multiprocessing/pool.py", line 125, in worker
    result = (True, func(*args, **kwds))
  File "/usr/lib/python3.10/multiprocessing/pool.py", line 48, in mapstar
    return list(map(*args))
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 661, in _FetchProjectList
    return [self._FetchOne(opt, x) for x in projects]
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 661, in <listcomp>
    return [self._FetchOne(opt, x) for x in projects]
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 681, in _FetchOne
    sync_result = project.Sync_NetworkHalf(
  File "/workspace/android/.repo/repo/project.py", line 1320, in Sync_NetworkHalf
    and self._ApplyCloneBundle(
  File "/workspace/android/.repo/repo/project.py", line 2715, in _ApplyCloneBundle
    GitCommand(
  File "/workspace/android/.repo/repo/git_command.py", line 344, in __init__
    self._RunCommand(
  File "/workspace/android/.repo/repo/git_command.py", line 425, in _RunCommand
    with Trace(
  File "/workspace/android/.repo/repo/repo_trace.py", line 123, in __exit__
    with open(_TRACE_FILE, "a") as f:
OSError: [Errno 28] No space left on device
"""

The above exception was the direct cause of the following exception:

Traceback (most recent call last):
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 1630, in Execute
    self._ExecuteHelper(opt, args, errors)
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 1738, in _ExecuteHelper
    result = self._FetchMain(
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 907, in _FetchMain
    result = self._Fetch(to_fetch, opt, err_event, ssh_proxy, errors)
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 862, in _Fetch
    if not _ProcessResults(results):
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 795, in _ProcessResults
    for results in results_sets:
  File "/usr/lib/python3.10/multiprocessing/pool.py", line 451, in <genexpr>
    return (item for chunk in result for item in chunk)
  File "/usr/lib/python3.10/multiprocessing/pool.py", line 873, in next
    raise value
OSError: [Errno 28] No space left on device

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/workspace/android/.repo/repo/main.py", line 447, in _RunLong
    execute_command()
  File "/workspace/android/.repo/repo/main.py", line 413, in execute_command
    execute_command_helper()
  File "/workspace/android/.repo/repo/main.py", line 379, in execute_command_helper
    result = cmd.Execute(copts, cargs)
  File "/workspace/android/.repo/repo/subcmds/sync.py", line 1634, in Execute
    raise RepoUnhandledExceptionError(e, aggregate_errors=errors)
error.RepoUnhandledExceptionError: [Errno 28] No space left on device

During handling of the above exception, another exception occurred:

OSError: [Errno 28] No space left on device

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/workspace/android/.repo/repo/main.py", line 298, in _Run
    result = run()
  File "/workspace/android/.repo/repo/main.py", line 281, in <lambda>
    run = lambda: self._RunLong(name, gopts, argv) or 0
  File "/workspace/android/.repo/repo/main.py", line 519, in _RunLong
    git_trace2_event_log.Write(gopts.git_trace2_event_log)
  File "/workspace/android/.repo/repo/git_trace2_event_log.py", line 28, in Write
    path = self._GetEventTargetPath()
  File "/workspace/android/.repo/repo/git_trace2_event_log.py", line 32, in _GetEventTargetPath
    return GetEventTargetPath()
  File "/workspace/android/.repo/repo/git_command.py", line 122, in GetEventTargetPath
    p = GitCommand(
  File "/workspace/android/.repo/repo/git_command.py", line 344, in __init__
    self._RunCommand(
  File "/workspace/android/.repo/repo/git_command.py", line 425, in _RunCommand
    with Trace(
  File "/workspace/android/.repo/repo/repo_trace.py", line 107, in __enter__
    with open(_TRACE_FILE, "a") as f:
OSError: [Errno 28] No space left on device

During handling of the above exception, another exception occurred:

OSError: [Errno 28] No space left on device

During handling of the above exception, another exception occurred:

Traceback (most recent call last):
  File "/workspace/android/.repo/repo/main.py", line 876, in <module>
    _Main(sys.argv[1:])
  File "/workspace/android/.repo/repo/main.py", line 852, in _Main
    result = repo._Run(name, gopts, argv) or 0
  File "/workspace/android/.repo/repo/main.py", line 282, in _Run
    with Trace(
  File "/workspace/android/.repo/repo/repo_trace.py", line 123, in __exit__
    with open(_TRACE_FILE, "a") as f:
OSError: [Errno 28] No space left on device
gitpod /workspace/android (master) $ cd .repo
gitpod /workspace/android/.repo (master) $ rm -rf .git
gitpod /workspace/android/.repo (master) $ cd ..
gitpod /workspace/android (master) $ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .repo/
        .vscode/
        readme.md

nothing added to commit but untracked files present (use "git add" to track)
gitpod /workspace/android (master) $ git add .
fatal: Unable to create '/workspace/android/.git/index.lock': No space left on device
gitpod /workspace/android (master) $ rm -rf .repo
gitpod /workspace/android (master) $ ^C
gitpod /workspace/android (master) $ 







Android Open Source Project
Docs
GO TO CODE ➚
Search

English
Sign in
DOCUMENTATION
Getting Started
Security
Core Topics
Compatibility
Android Devices
Automotive
Reference
Filter

AOSP
Docs
Getting Started
Was this helpful?

Building Android

bookmark_border
Follow these instructions to begin building Android.

Setting up the environment
Initialize the environment with the envsetup.sh script:


source build/envsetup.sh
or


. build/envsetup.sh
See the script at platform/build/envsetup.sh for descriptions of related commands, including lunch for selecting device targets and tapas for building unbundled apps, such as the reference TV app.

You need to reissue this command after every repo sync to pick up any changes to that script. Note that replacing source with . (a single dot) saves a few characters, and the short form is more commonly used in documentation.

The envsetup.sh script imports several commands that enable you to work with the Android source code, including the commands used in this exercise.

To see the full list of available commands, run:


hmm
Choosing a target
lunch
Choose which target to build with lunch. lunch product_name-build_variant selects product_name as the product to build, and build_variant as the variant to build, and stores those selections in the environment to be read by subsequent invocations of m and other similar commands.

The exact configuration can be passed as an argument. For example, the following command refers to a complete build for the emulator, with all debugging enabled:


lunch aosp_arm-eng
If run with no arguments, lunch prompts you to choose a target from the menu, but note that the menu doesn't include every possibility. See Selecting a device build for the build configurations of all devices supported in AOSP, or talk to people on your team about the correct lunch for the device you're working on.

All build targets take the form BUILD-BUILDTYPE, where BUILD is a codename referring to the particular feature combination. BUILDTYPE is one of the following.

Buildtype	Use
user	Limited access; suited for production
userdebug	Like user but with root access and debug capability; very close to production performance
eng	Development configuration with faster build time; most suited for day-to-day development
The userdebug build should behave the same as the user build, with the ability to enable additional debugging that normally violates the security model of the platform. This makes the userdebug build good for understanding the performance and power used by the release. When developing with the userdebug build, follow the userdebug guidelines.

The eng build prioritizes engineering productivity for engineers who work on the platform. The eng build turns off various optimizations used to maximize runtime performance. Otherwise, the eng build is very similar to the user and userdebug builds so that device developers can see how the code behaves in those environments.

To see the current lunch settings, run the command:


echo "$TARGET_PRODUCT-$TARGET_BUILD_VARIANT"
For more information about building for and running on actual hardware, see Flashing Devices.

tapas
The tapas command configures the build of unbundled apps. It selects individual apps to be built by the Android build system. Unlike lunch, tapas does not request the building of images for a device.

Run tapas help for more information on the command.

Building the code
This section is a quick summary to ensure that setup is complete.

Build everything with m. m can handle parallel tasks with a -jN argument. If you don't provide a -j argument, the build system automatically selects a parallel task count that it thinks is optimal for your system.


m
As explained above, you can build specific modules instead of the full device image by listing their names in your m command line. In addition, m provides some pseudotargets for special purposes. Some examples are:

droid - m droid is the normal build. This target is here because the default target requires a name.
all - m all builds everything that m droid does, plus everything that doesn't have the droid tag. The build server runs this to make sure that everything that is in the tree and has an Android.mk file builds.
m - Runs builds from the top of the tree. This is useful because you can run make from within subdirectories. If you have the TOP environment variable set, it uses that. If you don't, it looks up the tree from the current directory, trying to find the top of the tree. You can either build the whole source code tree by running m without arguments or build specific targets by specifying their names.
mma - Builds all of the modules in the current directory, and their dependencies.
mmma - Builds all of the modules in the supplied directories, and their dependencies.
croot - cd to the top of the tree.
clean - m clean deletes all of the output and intermediate files for this configuration. This is the same as rm -rf out/.
Run m help to see what other pseudotargets m provides.

Running the build
You can either run your build on an emulator or flash it on a device. Because you've already selected your build target with lunch, it's unlikely to run on a different target than it was built for.

Note: Remember to obtain proprietary binaries or your build won't boot successfully on your target hardware. Sometimes the source might have different binaries for different builds and branches. If you obtain binary blobs at this point, you need to unpack them, m installclean, and rebuild. For more information on this process, see Obtaining proprietary binaries.

Flashing with fastboot
To flash a device, use fastboot, which should be included in your path after a successful build. See Flashing a device for instructions.

Emulating an Android device
The emulator is added to your path automatically by the build process. To run the emulator, type:


emulator
Understanding build fingerprints
To track and report issues tied to a particular Android build, it is important to understand the build fingerprint. The build fingerprint is a unique, human-readable string containing manufacturer information issued to each build. See the FINGERPRINT description within the Build Parameters section of the Android Compatibility Definition Document (CDD) for the precise syntax.

The build fingerprint represents a particular Android implementation and revision. This unique key allows app developers and others to report issues with specific firmware versions. See Reporting bugs for the Android issue-reporting process.

A build fingerprint encapsulates all Android implementation details:

APIs: Android and native, as well as soft API behaviors
Core API and some system UI behavior
Compatibiility and security requirements defined in the CDD
Product specifications and the uses-feature setting employed by apps to target devices meeting expected requirements
Implementations of hardware and software components
See the CDD for complete details and Adding a New Device for instructions on creating an entirely new Android device.

Troubleshooting common build errors
Wrong Java version
If you're attempting to build a version of Android that's inconsistent with your version of Java, make aborts with a message such as:


************************************************************
You are attempting to build with the incorrect version
of java.

Your version is: WRONG_VERSION.
The correct version is: RIGHT_VERSION.

Please follow the machine setup instructions at
    https://source.android.com/source/initializing.html
************************************************************
Here are the likely causes and solutions:

Failure to install the correct JDK as specified in the JDK requirements. Make sure you've followed the steps in Setting up the environment and Choosing a target.
Another JDK previously installed appearing in your path. Prepend the correct JDK to the beginning of your path or remove the problematic JDK.
No USB permission
By default on most Linux systems, unprivileged users can't access USB ports. If you see a permission denied error, follow the instructions in Configuring USB access.

If ADB was already running and can't connect to the device after getting those rules set up, you can kill it with adb kill-server. That command causes ADB to restart with the new configuration.

Was this helpful?

Content and code samples on this page are subject to the licenses described in the Content License. Java and OpenJDK are trademarks or registered trademarks of Oracle and/or its affiliates.

Last updated 2023-07-28 UTC.

BUILD
Android repository
Requirements
Downloading
Preview binaries
Factory images
Driver binaries
CONNECT
@Android on Twitter
@AndroidDev on Twitter
Android Blog
Google Security Blog
Platform on Google Groups
Building on Google Groups
Porting on Google Groups
GET HELP
Android Help Center
Pixel Help Center
www.android.com
Google Mobile Services
Stack Overflow
Issue Tracker
About Android
Community
Legal
License
Privacy
Site feedback

English
The new page has loaded.