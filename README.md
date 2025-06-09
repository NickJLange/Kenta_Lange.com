# Kenta_Lange.com
 
## New Feature
✅ Preview Changes
### PreReq  ```brew install render```

### Steps
1. Commit Latest Changes onto Branch ```git ci```
2. Checkout pr_test Branch ```git co pr_test```
3. Rebase pr_test Branch to main (so less chance of merge errors) ```git rebase -i main```
4. Merge in your test changes from Branch ```git merge $branchname```
5. Force Push to upstream ```git push -f```
6. Run PR Previewer - Make sure .env exists with RENDER_PUSH_URL set from render.com settings ```./preview.sh```
7. Attach to logs render to make sure it deploys ```render logs -o text --tail -r $RENDER_SERVICE```
