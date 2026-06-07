---
title: "Example: OOMKilled - Exit Code 137 in Docker"
date: 2026-06-07
tech: "docker"
verified: false
source_url: "https://github.com/docker/cli/issues/1234"
clean_log: "Fatal error: runtime: out of memory. Container killed by OOM killer."
root_cause: "The container exceeded its memory limit, causing the Linux OOM killer to terminate the main process."
solution: "Increase the memory limit for the container using `docker run -m 2g ...` or monitor memory usage."
code_snippet: "```bash\ndocker update --memory 2g --memory-swap 2g container_name\n```"
logPreview: "Fatal error: runtime: out of memory..."
---
This is an example error page. Your generator will replace these.