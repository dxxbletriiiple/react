# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="dstufft"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git)

source $ZSH/oh-my-zsh.sh


# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi
alias build='zsh build.sh'
alias b=build
alias npms='npm start'
alias npmb='npm run build'

alias touc="touch"
alias dr='deno run'
alias c='clear'
alias celar=c
alias с=c
alias С=c
alias C=c
alias g='git'
alias got=g
alias gti=g
alias got=g
alias ga='git add'
alias gaa='git add --all'
alias gpl='git pull'
alias gb='git branch'
alias gbD='git branch -D'
alias gba='git branch -a'
alias gbd='git branch -d'
alias gbr='git branch'
alias gcb='git checkout -b'
alias gco='git checkout'
alias gf='git fetch'
alias gi='git init'
alias gl='git log --oneline --graph --decorate --all'
alias glg='git log --stat'
alias glgg='git log --graph'
alias gm='git commit -m'
alias gp='git push'
alias gpu='git push --set-upstream origin master'
alias gr='git remote'
alias gra='git remote add origin'
alias gcf='git config --list'
alias gcl='git clone'
alias grb='git rebase'
alias gs='git status'
alias gsw='git show --pretty=fuller'
alias gcfg="git config --local user.name \"dxxbletriiiple\" && git config --local user.email \"dxxbletriiiple@gmail.com\""
alias dxx="/media/dxxbletriiiple/HDD/"

alias gc='gcc -Wall -Werror -Wextra'
alias cpf='c++ -Wall -Werror -Wextra -std=c++98'

alias cra='create-react-app'
alias code='open -a Visual\ Studio\ Code'
alias cdoe=code

# alias pbcopy='xclip -selection clipboard'
# alias pbpaste='xclip -selection clipboard -o'
#
#
# alias -='cd -'
# alias 1='cd -1'
# alias 2='cd -2'
# alias 3='cd -3'
# alias 4='cd -4'
# alias 5='cd -5'
# alias 6='cd -6'
# alias 7='cd -7'
# alias 8='cd -8'
# alias 9='cd -9'
# alias afind='ack -il'
# alias bs='bash grademe.sh'
# alias code='open -a Visual\ Studio\ Code'
# alias egrep='egrep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
# alias fgrep='fgrep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
# alias gam='git am'
# alias gama='git am --abort'
# alias gamc='git am --continue'
# alias gams='git am --skip'
# alias gamscp='git am --show-current-patch'
# alias gap='git apply'
# alias gapa='git add --patch'
# alias gapt='git apply --3way'
# alias gau='git add --update'
# alias gav='git add --verbose'
#
# alias gbda='git branch --no-color --merged | command grep -vE "^([+*]|\s*($(git_main_branch)|$(git_develop_branch))\s*$)" | command xargs git branch -d 2>/dev/null'
# alias gbl='git blame -b -w'
# alias gbnm='git branch --no-merged'
# alias gbs='git bisect'
# alias gbsb='git bisect bad'
# alias gbsg='git bisect good'
# alias gbsr='git bisect reset'
# alias gbss='git bisect start'
# alias 'gc!'='git commit -v --amend'
# alias gca='git commit -v -a'
# alias 'gca!'='git commit -v -a --amend'
# alias gcam='git commit -a -m'
# alias 'gcan!'='git commit -v -a --no-edit --amend'
# alias 'gcans!'='git commit -v -a -s --no-edit --amend'
# alias gcas='git commit -a -s'
# alias gcasm='git commit -a -s -m'
# alias gcd='git checkout $(git_develop_branch)'
# alias gclean='git clean -id'
# alias gcm='git checkout $(git_main_branch)'
# alias gcmsg='git commit -m'
# alias 'gcn!'='git commit -v --no-edit --amend'
# alias gcor='git checkout --recurse-submodules'
# alias gcount='git shortlog -sn'
# alias gcp='git cherry-pick'
# alias gcpa='git cherry-pick --abort'
# alias gcpc='git cherry-pick --continue'
# alias gcs='git commit -S'
# alias gcsm='git commit -s -m'
# alias gcss='git commit -S -s'
# alias gcssm='git commit -S -s -m'
# alias gd='git diff'
# alias gdca='git diff --cached'
# alias gdct='git describe --tags $(git rev-list --tags --max-count=1)'
# alias gdcw='git diff --cached --word-diff'
# alias gds='git diff --staged'
# alias gdt='git diff-tree --no-commit-id --name-only -r'
# alias gdup='git diff @{upstream}'
# alias gdw='git diff --word-diff'
# alias gfa='git fetch --all --prune --jobs=10'
# alias gfg='git ls-files | grep'
# alias gfo='git fetch origin'
# alias gg='git gui citool'
# alias gga='git gui citool --amend'
# alias ggpull='git pull origin "$(git_current_branch)"'
# alias ggpur=ggu
# alias ggpush='git push origin "$(git_current_branch)"'
# alias ggsup='git branch --set-upstream-to=origin/$(git_current_branch)'
# alias ghh='git help'
# alias gignore='git update-index --assume-unchanged'
# alias gignored='git ls-files -v | grep "^[[:lower:]]"'
# alias git-svn-dcommit-push='git svn dcommit && git push github $(git_main_branch):svntrunk'
# alias gk='\gitk --all --branches &!'
# alias gke='\gitk --all $(git log -g --pretty=%h) &!'

# alias glgm='git log --graph --max-count=10'
# alias glgp='git log --stat -p'
# alias glo='git log --oneline --decorate'
# alias globurl='noglob urlglobber '
# alias glod='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'\'
# alias glods='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ad) %C(bold blue)<%an>%Creset'\'' --date=short'
# alias glog='git log --oneline --decorate --graph'
# alias gloga='git log --oneline --decorate --graph --all'
# alias glol='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'\'
# alias glola='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'\'' --all'
# alias glols='git log --graph --pretty='\''%Cred%h%Creset -%C(auto)%d%Creset %s %Cgreen(%ar) %C(bold blue)<%an>%Creset'\'' --stat'
# alias glp=_git_log_prettily
# alias glum='git pull upstream $(git_main_branch)'
# alias gma='git merge --abort'
# alias gmom='git merge origin/$(git_main_branch)'
# alias gmtl='git mergetool --no-prompt'
# alias gmtlvim='git mergetool --no-prompt --tool=vimdiff'
# alias gmum='git merge upstream/$(git_main_branch)'
# alias gpd='git push --dry-run'
# alias gpf='git push --force-with-lease'
# alias 'gpf!'='git push --force'
# alias gpoat='git push origin --all && git push origin --tags'
# alias gpr='git pull --rebase'
# alias gpristine='git reset --hard && git clean -dffx'
# alias gpsup='git push --set-upstream origin $(git_current_branch)'
# alias gpv='git push -v'
# alias grba='git rebase --abort'
# alias grbc='git rebase --continue'
# alias grbd='git rebase $(git_develop_branch)'
# alias grbi='git rebase -i'
# alias grbm='git rebase $(git_main_branch)'
# alias grbo='git rebase --onto'
# alias grbom='git rebase origin/$(git_main_branch)'
# alias grbs='git rebase --skip'
# alias grep='grep --color=auto --exclude-dir={.bzr,CVS,.git,.hg,.svn,.idea,.tox}'
# alias grev='git revert'
# alias grh='git reset'
# alias grhh='git reset --hard'
# alias grm='git remote add origin main'
# alias grmc='git rm --cached'
# alias grmv='git remote rename'
# alias groh='git reset origin/$(git_current_branch) --hard'
# alias grrm='git remote remove'
# alias grs='git restore'
# alias grset='git remote set-url'
# alias grss='git restore --source'
# alias grst='git restore --staged'
# alias grt='cd "$(git rev-parse --show-toplevel || echo .)"'
# alias gru='git reset --'
# alias grup='git remote update'
# alias grv='git remote -v'
# alias gsb='git status -sb'
# alias gsd='git svn dcommit'
# alias gsh='git show'
# alias gsi='git submodule init'
# alias gsps='git show --pretty=short --show-signature'
# alias gsr='git svn rebase'
# alias gss='git status -s'
# alias gst='git status'
# alias gsta='git stash push'
# alias gstaa='git stash apply'
# alias gstall='git stash --all'
# alias gstc='git stash clear'
# alias gstd='git stash drop'
# alias gstl='git stash list'
# alias gstp='git stash pop'
# alias gsts='git stash show --text'
# alias gstu='gsta --include-untracked'
# alias gsu='git submodule update'
# alias gsw='git switch'
# alias gswc='git switch -c'
# alias gswd='git switch $(git_develop_branch)'
# alias gswm='git switch $(git_main_branch)'
# alias gtl='gtl(){ git tag --sort=-v:refname -n -l "${1}*" }; noglob gtl'
# alias gts='git tag -s'
# alias gtv='git tag | sort -V'
# alias gunignore='git update-index --no-assume-unchanged'
# alias gunwip='git log -n 1 | grep -q -c "\-\-wip\-\-" && git reset HEAD~1'
# alias gup='git pull --rebase'
# alias gupa='git pull --rebase --autostash'
# alias gupav='git pull --rebase --autostash -v'
# alias gupv='git pull --rebase -v'
# alias gwch='git whatchanged -p --abbrev-commit --pretty=medium'
# alias gwip='git add -A; git rm $(git ls-files --deleted) 2> /dev/null; git commit --no-verify --no-gpg-sign -m "--wip-- [skip ci]"'
# alias history=omz_history
# alias l='ls -lah'
# alias la='ls -lAh'
# alias ll='ls -lh'
# alias ls='ls -G'
# alias lsa='ls -lah'
# alias md='mkdir -p'
# alias nr=norminette
# alias nr2=norminetteV2
# alias nrh='norminette -R CheckFOrbiddenSourceHeader'
# alias rd=rmdir
# alias rt=./run_test
# alias run-help=man
# alias which-command=whence

export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm`` # This loads nvm bash_completion

# Bun
export BUN_INSTALL="/home/dxxbletriiiple/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
