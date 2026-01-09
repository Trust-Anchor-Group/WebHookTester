WebHook Tester
=================

Free Web-Hook Tester Service that runs on any [TAG Neuron(R)](https://lab.tagroot.io/Documentation/Index.md). 
Allows anyone create web pages displaying incoming POST requests in real-time. Information is not
persisted. Service can be used by developers to test web hooks and other POST-based services.

## Installable Package

The Web-Hook Tester service has been made into a package that can be downloaded and installed on any 
[TAG Neuron](https://lab.tagroot.io/Documentation/Index.md). If your Neuron is connected to the
TAG Neuron network, you can install the package using the following information:

| Package information                                                                                                              ||
|:-----------------|:---------------------------------------------------------------------------------------------------------------|
| Package          | `TAG.WebHookTester.package`                                                                                    |
| Installation key | `Mb9pim8FTjHBnju2f2ZVNHBRbOG3VHhM7iBn26mgcvc/uwjouWjHEF0OmcC/noKEuZAOWZY6Ka4A4abb4fc2a2596e04f047400e3218dcd2` |
| More Information | https://lab.tagroot.io/Community/Post/Testing_WebHooks                                                         |

Installing the package via the administrative console (*Chat Admin*), can be done using the
following command:

```
install nobackup TAG.WebHookTester.package Mb9pim8FTjHBnju2f2ZVNHBRbOG3VHhM7iBn26mgcvc/uwjouWjHEF0OmcC/noKEuZAOWZY6Ka4A4abb4fc2a2596e04f047400e3218dcd2
```

## Development

The WebHookTester service runs on any [IoT Gateway Host](https://github.com/PeterWaher/IoTGateway). This includes the
[TAG Neuron(R)](https://lab.tagroot.io/Documentation/Index.md), The IoT Gateway itself, or [Lil'Sis'](https://lils.is/), 
which you can run on your local machine. To simplify development, once the project is cloned, add a `FileFolder` reference
to your repository folder in your [gateway.config file](https://lab.tagroot.io/Documentation/IoTGateway/GatewayConfig.md). 
This allows you to test and run your changes immediately, without having to synchronize the folder contents with an external 
host, or go through the trouble of generating a distributable software package just for testing purposes.

Example:

```
<FileFolders>
  <FileFolder webFolder="/WebHookTester" folderPath="C:\My Projects\WebHookTester\Root\WebHookTester" />
</FileFolders>
```

**Note**: Once file folder reference is added, you need to restart the IoT Gateway service for the change to take effect.

You will also need to copy the `WebHookTester.config` file to the Program Data folder of the gateway. This configuration 
file contains initialization script that will publish the service in the main administrative menu.
