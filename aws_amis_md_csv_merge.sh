#!/bin/bash

# description: Merge multiple AWS AMI metadata CSV ad MD files into one.
#
# All docs/cloud/AWS_AMIS_*.md are merged into docs/cloud/AWS_AMIS.md
# All docs/.vuepress/public/ci-data/aws_amis_*.csv are merged into docs/.vuepress/public/ci-data/aws_amis.csv
#
# In both cases, AlmaLinux newer versions go first, and the files are merged in descending order.
# The MD files are merged by skipping the header line in all but the first file.

# Merge csv files: just concatenate them
csv_data_dir="docs/.vuepress/public/ci-data"
cat ${csv_data_dir}/aws_amis_{10..8}.csv > ${csv_data_dir}/aws_amis.csv

# Merge md files: first one is taking all the lines, and the rest are skipping the header 2 lines
md_data_dir="docs/cloud"
( cat ${md_data_dir}/AWS_AMIS_10.md; tail -q -n +3 ${md_data_dir}/AWS_AMIS_{9..8}.md ) > ${md_data_dir}/AWS_AMIS.md
# Make the md file prettier
npx prettier --parser markdown --write ${md_data_dir}/AWS_AMIS.md
