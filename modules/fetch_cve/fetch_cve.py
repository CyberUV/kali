import requests
import json

def get_latest_cves(limit=5):
    try:
        # NVD API (basic usage without API key for recent CVEs)
        url = "https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage={}".format(limit)
        response = requests.get(url)
        data = response.json()

        with open("cve_data.json", "w") as f:
            json.dump(data, f, indent=3)

        cve_list = []
        for item in data.get("vulnerabilities", []):
            cve_id = item['cve']['id']
            description = item['cve']['descriptions'][0]['value']
            published = item['cve']['published']
            cve_list.append({
                'id': cve_id,
                'description': description,
                'published': published,
                'link': f'https://nvd.nist.gov/vuln/detail/{cve_id}'
            })

        return cve_list
    except Exception as e:
        return [{'id': 'Error', 'description': str(e), 'published': '', 'link': '#'}]
