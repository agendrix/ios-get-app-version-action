# Get iOS app version

**Important** This action is only valid for iOS project using [XcodeGen](https://github.com/yonaskolb/XcodeGen).

Get and output the MARKETING_VERSION from your iOS app's project.yml file.

See [action.yml](./action.yml) for the precise list of `inputs` and `outputs`.

## Example usage

```yaml
uses: agendrix/get-ios-app-version@v1.0.0
with:
  project-yml-path: "./project.yml"
```
