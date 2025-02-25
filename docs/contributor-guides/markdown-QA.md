# Markdown Quality Assurance (QA) Guide

## Introduction

As contributors to this repository, it is essential that all markdown files adhere to high standards for readability, consistency, and correctness. To achieve this, we have integrated two tools into the development workflow:

- **Vale**: A linter for spelling, grammar, and style guidelines.
- **markdownlint-cli**: A linter for markdown syntax and best practices.

Both tools are integrated into the DevContainer environment to automatically run when you interact with the repository. This document outlines how to use these tools to ensure your changes meet the repository's standards before pushing them to the default branch.

## Using Vale

Vale is a powerful tool that checks markdown files for spelling and grammar issues while also enforcing specific style guides. In this repository, Vale is configured to use the Google Developer Documentation Style Guide and write-good style for general improvements to the writing.

### How to Run Vale

Ensure you are working within the DevContainer environment. The necessary tools are already installed inside the container.

To run Vale, simply open the terminal in your DevContainer and execute the following command:

> vale .

This will lint all markdown files in the repository starting from the current directory. Vale will check for: 
* **Spelling errors**
* **Grammar issues**
* **Consistency with style guidelines** (e.g. Google Developer Style)

### Vale Configuration

Vale uses a configuration file (.vale.ini) that sets up the rules and style guides for linting. In this repository, we are using the Google Developer Documentation Style Guide and write-good to ensure that all markdown files follow a consistent style and are free from common spelling and grammatical errors.
* **Google Style Guide:** Ensures that the markdown files follow the best practices for writing technical documentation.
* **write-good:** Provides additional guidelines for writing, such as avoiding overly complex or ambiguous language.

### Fixing Vale Errors

* If Vale reports spelling errors, correct them in the text.
* If it flags grammar or style issues, adjust your markdown content to match the recommended style.
  
Once all issues are resolved, re-run Vale to verify that the markdown file is free from linting issues.


## Using markdownlint-cli

markdownlint-cli is a tool for checking markdown files against a set of syntax rules. It helps ensure that all markdown files are properly formatted and follow markdown best practices.

### How to Run markdownlint-cli

> markdownlint .

This command will lint all markdown files in the repository, ensuring that they follow syntax guidelines such as:
* **Heading levels**
* **Consistent use of bullet points and lists.**
* **Properly formatted code blocks.**

### markdownlint-cli Configuration
We have a .markdownlint.json configuration file that contains the rules for markdownlint. Here are the key settings in our configuration:
* **MD013:** Line length rule is turned off to allow flexibility.
* **MD041:** First-line heading rule ensures the first line of each markdown file is a top-level heading (e.g. #).

### Fixing markdownlint-cli Errors
* If markdownlint-cli flags any issues with the markdown syntax, correct them by following the specific rule.
* Common issues include:
* * Ensuring the first line of the markdown file is a top-level heading (#).
* * Removing unnecessary blank lines in code blocks or blockquotes.

## Best Practices for Contributors

To ensure that only high-quality markdown files are pushed to the default branch, contributors should follow these steps:

  1. Use Vale to check for spelling and grammar: Before committing any markdown file, run vale . to ensure the text follows the Google Developer Documentation Style Guide and has no spelling or grammatical errors.

  2. Run markdownlint-cli for markdown syntax: Run markdownlint . to make sure your markdown files adhere to the correct syntax and formatting conventions.

  3. Fix any errors: If either Vale or markdownlint-cli reports issues, take the necessary steps to fix them. This may involve correcting spelling mistakes, improving grammar, or adjusting markdown formatting.

  4. Review changes: After running both tools and fixing any errors, review your changes. Sometimes, automatic linting may not capture certain nuances, so a manual review is always a good idea.

  5.  Ensure the changes are linted before pushing: Before pushing your changes to the default branch, make sure the files are clean and pass both Vale and markdownlint-cli checks.

## Conclusion

By adhering to these guidelines and using Vale and markdownlint-cli, contributors can ensure that markdown files in this repository are of high quality and meet the standards for readability, consistency, and proper syntax. This helps maintain a professional and standardized documentation style across the project.
Please make sure to run the linting tools on your markdown files before submitting any changes to the default branch. This will help streamline the review process and ensure that documentation quality remains high.
