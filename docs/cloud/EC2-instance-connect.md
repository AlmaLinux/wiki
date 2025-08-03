---
title: "EC2 Instance Connect"
---

###### last modified: 2024-03-05

# How to use EC2 Instance Connect

## About EC2 Instance Connect

[Amazon EC2 Instance Connect](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/connect-linux-inst-eic.html) provides a simple and secure way to connect to your Linux instances with Secure Shell (SSH).

If you want to connect to an AlmaLinux OS instance using EC2 Instance Connect, please, follow the steps below.

::: tip
EC2 Instance Connect packages are pre-installed in AlmaLinux OS starting versions `8.9.20240303` and `9.3.20240303` However, for older versions of AlmaLinux OS AMIs, you will need to install the packages manually:
Install EC2 Instance Connect RPM packages:

- **AlmaLinux OS 9 x86_64**
  ```sh
  dnf -y install \
      https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_amd64/ec2-instance-connect.rpm \
      https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_amd64/ec2-instance-connect-selinux.noarch.rpm
  ```
- **AlmaLinux OS 9 AArch64**
  ```sh
  dnf -y install \
      https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_arm64/ec2-instance-connect.rpm \
      https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_amd64/ec2-instance-connect-selinux.noarch.rpm
  ```
- **AlmaLinux OS 8 x86_64**
  ```sh
  dnf -y install \
    https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_amd64/ec2-instance-connect.rhel8.rpm \
    https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_amd64/ec2-instance-connect-selinux.noarch.rpm
  ```
- **AlmaLinux OS 8 AArch64**
  ```sh
  dnf -y install \
    https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_arm64/ec2-instance-connect.rhel8.rpm \
    https://amazon-ec2-instance-connect-us-west-2.s3.us-west-2.amazonaws.com/latest/linux_amd64/ec2-instance-connect-selinux.noarch.rpm
  ```
  :::

## Enabling EC2 Instance Connect

To be able to connect to an AlmaLinux OS instance using the EC2 Instance Connect you need to enable it first by instance ID or resource tag. For this purpose, you need to create a relevant policy file using EC2 Console or AWS CLI.

### EC2 Console:

- In EC2 Console navigate to **"IAM -> Policies -> Create policy"**.
- Select Policy editor as JSON and paste the relevant policy contents:
  - Policy to enable EC2 Instance Connect by tag: `ec2_instance_connect_policy_by_tag.json`.

    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "ec2-instance-connect:SendSSHPublicKey",
          "Resource": "arn:aws:ec2:$REGION:$ACCOUNT-ID:instance/*",
          "Condition": {
            "StringEquals": {
              "aws:ResourceTag/$TAGKEY": "$TAGVALUE",
              "ec2:osuser": "ec2-user"
            }
          }
        },
        {
          "Effect": "Allow",
          "Action": "ec2:DescribeInstances",
          "Resource": "*"
        }
      ]
    }
    ```

    Replace these variables with yours:
    - `$REGION`: AWS Region of instances you want to connect (for example,`us-east-1`) or `*` to apply to all regions.
    - `$ACCOUNT-ID`: ID of AWS account or `*` to apply to all accounts.
    - `$TAGKEY`: Key of the resource tag, for example, `Foo`
    - `$TAGVALUE`: Value for `$TAGKEY`, for example, `Bar`

  - Policy to enable EC2 Instance Connect by instance ID: `ec2_instance_connect_policy_by_instance-id.json`.
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "ec2-instance-connect:SendSSHPublicKey",
          "Resource": [
            "arn:aws:ec2:$REGION:$ACCOUNT-ID:instance/$INSTANCE-ID",
            "arn:aws:ec2:$REGION:$ACCOUNT-ID:instance/$INSTANCE-ID"
          ],
          "Condition": {
            "StringEquals": {
              "ec2:osuser": "ec2-user"
            }
          }
        },
        {
          "Effect": "Allow",
          "Action": "ec2:DescribeInstances",
          "Resource": "*"
        }
      ]
    }
    ```
    Replace these variables with yours:
    - `$REGION`: AWS Region of instances you want to connect (for example,`us-east-1`) or `*` to apply to all regions.
    - `$ACCOUNT-ID`: ID of AWS account or `*` to apply to all accounts.
    - `$INSTANCE-ID`: ID of instance, for example, `i-1234567890abcdef0`

### AWS CLI

- Run the following command in AWS CLI to create a policy:

  ```sh
  aws iam create-policy \
      --policy-name $POLICY_NAME \
      --policy-document file://$POLICY_FILE
  ```

  Replace these variables with your data:
  - `$POLICY_NAME`: Name of policy, `ec2_instance_connect_policy_by_instance-id` or `ec2_instance_connect_policy_by_tag`
  - `$POLICY_FILE:`: Policy file in JSON `ec2_instance_connect_policy_by_instance-id.json` or `ec2_instance_connect_policy_by_tag.json`

- Put relevant policy contents:
  - Policy to enable EC2 Instance Connect by tag: `ec2_instance_connect_policy_by_tag.json`.

    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "ec2-instance-connect:SendSSHPublicKey",
          "Resource": "arn:aws:ec2:$REGION:$ACCOUNT-ID:instance/*",
          "Condition": {
            "StringEquals": {
              "aws:ResourceTag/$TAGKEY": "$TAGVALUE",
              "ec2:osuser": "ec2-user"
            }
          }
        },
        {
          "Effect": "Allow",
          "Action": "ec2:DescribeInstances",
          "Resource": "*"
        }
      ]
    }
    ```

    Replace these variables with yours:
    - `$REGION`: AWS Region of instances you want to connect (for example,`us-east-1`) or `*` to apply to all regions.
    - `$ACCOUNT-ID`: ID of AWS account or `*` to apply to all accounts.
    - `$TAGKEY`: Key of the resource tag, for example, `Foo`
    - `$TAGVALUE`: Value for `$TAGKEY`, for example, `Bar`

  - Policy to enable EC2 Instance Connect by instance ID: `ec2_instance_connect_policy_by_instance-id.json`.
    ```json
    {
      "Version": "2012-10-17",
      "Statement": [
        {
          "Effect": "Allow",
          "Action": "ec2-instance-connect:SendSSHPublicKey",
          "Resource": [
            "arn:aws:ec2:$REGION:$ACCOUNT-ID:instance/$INSTANCE-ID",
            "arn:aws:ec2:$REGION:$ACCOUNT-ID:instance/$INSTANCE-ID"
          ],
          "Condition": {
            "StringEquals": {
              "ec2:osuser": "ec2-user"
            }
          }
        },
        {
          "Effect": "Allow",
          "Action": "ec2:DescribeInstances",
          "Resource": "*"
        }
      ]
    }
    ```
    Replace these variables with yours:
    - `$REGION`: AWS Region of instances you want to connect (for example,`us-east-1`) or `*` to apply to all regions.
    - `$ACCOUNT-ID`: ID of AWS account or `*` to apply to all accounts.
    - `$INSTANCE-ID`: ID of instance, for example, `i-1234567890abcdef0`

- When the policy is created, you can attach this policy to an IAM user or/and group.

## Connect to an instance

There are three ways of connecting:

- Use the browser-based client on the AWS Console
- Push your public SSH keys with AWS CLI and use your SSH client to connect
- Use AWS CLI to connect

### Using the browser-based client on AWS Console

**Requirements:**

- `curl`
- `jq`

To connect using the EC2 Instance Connect browser-based client, you need to get the IP address range of the AWS service in your region. Add these ranges to the security group of instances for inbound SSH connection.

Get the subnet of AWS service for your region:

```sh
curl -s https://ip-ranges.amazonaws.com/ip-ranges.json | jq '.prefixes[] | select(.region=="$REGION") | select(.service=="EC2_INSTANCE_CONNECT") | .ip_prefix'
```

Replace `$REGION` with an AWS region, for example, `us-east-1`

### Push/Inject your public SSH keys with AWS CLI and use SSH client of your choice

::: warning
When you connect to an instance using EC2 Instance Connect, the Instance Connect API pushes an SSH public key to the instance metadata where it remains for **60 seconds**.
:::
Push your public SSH key to an instance and connect with the SSH client:

Run the command:

```sh
aws ec2-instance-connect send-ssh-public-key \
    --instance-id $INSTANCE_ID \
    --instance-os-user ec2-user \
    --ssh-public-key file://$SSH_PUB_KEY_PATH
```

Replace these variables with your own:

- `$INSTANCE_ID`: ID of Instance, for example, `i-1234567890abcdef0`
- `$SSH_PUB_KEY_PATH`: Path of public pair of SSH key, for example, `~/.ssh/my_ssh_key.pub`

::: tip
See the [AWS CLI Command Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2-instance-connect/send-ssh-public-key.html) for more command line options.
:::

### Use AWS CLI to connect

Run the command to connect using only AWS CLI:

```sh
aws ec2-instance-connect ssh --instance-id $INSTANCE_ID
```

Replace these variables with your own:

- `$INSTANCE_ID`: ID of Instance, for example, `i-1234567890abcdef0`

::: tip
See the [AWS CLI Command Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/reference/ec2-instance-connect/ssh.html) for more command line options.
:::
