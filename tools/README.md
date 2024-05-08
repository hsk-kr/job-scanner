# Tools

Tools that aid in testing and development.

## linked-test-html-generator

The process entailed updating the joblist.html file, utilized for testing the functionality of our parsing logics.

### How To Use

1\. Execute the script.

```
node linkedin-test-html-generator.mjs
```

2\. Sign in Linkedin on the chrome test browser

This process can't be automated for security issues.

3\. Type "yes" in the command line

4\. Update Test and File.

It will generate `joblist.html` and `jobinfo.json` under the `tools/html` directory.

Replace the joblist.html file with the `utils/linkedin/__test__/html/joblist.html` file.

Update the job title, description, addtional info in `dom.test.ts` file according to jobinfo.json.

5\. Test

```
pnpm run test
```
