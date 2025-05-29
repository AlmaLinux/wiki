
# 🐧 Beginner's Guide to Contributing to the AlmaLinux Wiki

Welcome! This guide will help you make your **first contribution** to the AlmaLinux Wiki.

## 🎯 What Is the AlmaLinux Wiki?

The AlmaLinux Wiki provides documentation, guidelines, community links, and technical resources for AlmaLinux OS — a free, open-source, RHEL-compatible Linux distribution maintained by the community.

## 🛠 Prerequisites

- GitHub account
- Git installed on your system
- Basic Markdown knowledge
- Familiarity with GitHub Pull Requests

## 🚀 How to Contribute

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/wiki.git
cd wiki
```

### 2. Create a Feature Branch

```bash
git checkout -b add-my-contribution
```

### 3. Make Your Changes

You can:
- Add or improve documentation pages
- Fix typos, grammar, or formatting
- Update community or resource links
- Translate content to other languages

### 4. Test Your Changes

Run the following to make sure your changes render properly:

```bash
yarn install
yarn docs:dev
```

Visit `http://localhost:3000` in your browser to review the documentation locally.

### 5. Commit and Push

```bash
git add .
git commit -m "Add beginner guide to contributing"
git push origin add-my-contribution
```

### 6. Create a Pull Request

Go to your forked repository on GitHub and open a Pull Request against the `main` branch of [AlmaLinux/wiki](https://github.com/AlmaLinux/wiki).

Please include a clear explanation of the changes you made.

## 🙋 Where to Ask Questions

If you get stuck:
- Join the [Mattermost Chat](https://chat.almalinux.org)
- Visit the [Community Forum](https://forums.almalinux.org)
- Ask in [Reddit](https://www.reddit.com/r/AlmaLinux/)
- Or post your question in the relevant GitHub Issue

## 📄 License

By contributing, you agree that your content will be released under the [CC-BY-SA 4.0 License](https://creativecommons.org/licenses/by-sa/4.0/).

---

Thank you for helping improve AlmaLinux! 💙

