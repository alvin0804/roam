README

```json
{
    "test": "yarn test:references && yarn test:malagu",
    "test:references": "node scripts/compile-references --dry-run",
    "test:malagu": "lerna run test --scope \"@malagu/!(example-)*\" --stream --concurrency=1"
}
```
