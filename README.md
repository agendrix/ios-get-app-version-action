# Get iOS app version

**This action is only valid from iOS project using [XcodeGen](https://github.com/yonaskolb/XcodeGen)** 
This action gets and outputs the MARKETING_VERSION from your iOS app's project.yml file.

See [action.yml](./action.yml) for the precise list of `inputs` and `outputs`.

## Example usage

```yaml
      uses: agendrix/get-ios-app-version@v1.0.0
      with:
        project-yml-path: "./project.yml"
```
