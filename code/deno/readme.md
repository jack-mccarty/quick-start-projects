# Notes About Deno Code Snippets

## Imports

In Deno, most imports are done using URLs. For these examples, I do not provide a version number ie:

```javascript
import { Application, Router, Context } from "https://deno.land/x/oak/mod.ts";
```

This will always use the latest version of the package. If you want to use a specific version (which is usually recommeneded to avoid breakage due to package updates), you can do so by specifying the version number:

```javascript
import * as oak from "https://deno.land/x/oak@v12.6.1/mod.ts"
```

In a production environment, you should always specify the version number and would typically maintain a deps.ts file. 
For more information on that, please review: [Deno Dependency Management](https://deno.land/manual/examples/manage_dependencies).
