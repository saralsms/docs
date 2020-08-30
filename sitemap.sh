#!/bin/bash

# format date and time
iso_date_time=$(date +"%Y-%m-%dT%H:%M:%S%:::z")
# update modified values
sed -i -e 's/\(<lastmod>\).*\(<\/lastmod>\)/<lastmod>'"${iso_date_time}"'<\/lastmod>/g' sitemap.xml
