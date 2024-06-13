export const sidebar = [
    {
        title: '关于',
        path: '/zh/',
    },
    '/zh/alesco',
    {
        title: '贡献',
        children: [
            '/zh/Contribute',
            '/zh/Contribute-to-Documentation',
            '/zh/Mirrors',
            '/zh/Contribute-to-Testing',
            '/zh/Help-translating-site',
            {
                title: '特殊利益集团 (SIGs)',
                path: '/zh/sigs/',
                children: [
                    '/zh/sigs/Build-System',
                    '/zh/sigs/Cloud',
                    '/zh/sigs/Core',
                    '/zh/sigs/HPCandAI',
                    '/zh/sigs/Infrastructure',
                    '/zh/sigs/LiveMedia',
                    {
                        title: 'The Marketing SIG',
                        path: '/zh/sigs/Marketing',
                        children: [
                            '/zh/sigs/marketing/indico',
                        ]
                    },
                    '/zh/sigs/Migration',
                    '/zh/sigs/ProcessForCreatingNewSIG'
                ]
            },
        ]
    },
    {
        title: '开发',
        children: [
            '/zh/documentation/building-packages-guide',
            '/zh/development/building-almalinux-iso-locally',
            '/zh/development/Modified-packages',
            '/zh/development/Packaging',
            {
                title: "私钥",
                children: [
                    '/zh/development/private-keys/secure-boot'
                ]
            }
        ]
    },
    {
        title: '文档',
        children: [
            '/zh/Comparison',
            '/zh/FAQ',
            '/zh/Howto',
            {
                title: 'openQA指南',
                path: '/zh/development/openQA',
            },
            {
                title: '操作方法',
                path: '/zh/series/',
                children: [
                    '/zh/series/LAMP-server',
                    {
                        title: "Nginx",
                        path: '/zh/series/nginx/',
                        children: [
                            '/zh/series/nginx/NginxSeriesA01',
                            '/zh/series/nginx/NginxSeriesA02R8',
                            '/zh/series/nginx/NginxSeriesA02R91',
                            '/zh/series/nginx/NginxSeriesA02R92',
                            '/zh/series/nginx/NginxSeriesA03',
                            '/zh/series/nginx/NginxSeriesA04P1',
                        ]
                    },
                    {
                        title: "系统",
                        path: '/zh/series/system/',
                        children: [
                            '/zh/series/system/SystemSeriesA01',
                            '/zh/series/system/SystemSeriesA02',
                            '/zh/series/system/SystemSeriesA03',
                            '/zh/series/system/SystemSeriesA03R8',
                            '/zh/series/system/SystemSeriesA03R9',
                            '/zh/series/system/SystemSeriesA04',
                            '/zh/series/system/SystemSeriesA05',
                        ]
                    }
                ]
            },
            {
                title: '发行说明',
                path: '/zh/release-notes/',
                children: [
                    '/zh/release-notes/9.4',
                    '/zh/release-notes/8.10',
                    '/zh/release-notes/9.3',
                    '/zh/release-notes/8.9',
                    '/zh/release-notes/9.4-beta',
                    '/zh/release-notes/8.10-beta',
                    '/zh/release-notes/9.2',
                    '/zh/release-notes/8.8',
                    '/zh/release-notes/9.3-beta',
                    '/zh/release-notes/8.9-beta',
                    '/zh/release-notes/9.1',
                    '/zh/release-notes/8.7',
                    '/zh/release-notes/9.2-beta',
                    '/zh/release-notes/8.8-beta',
                    '/zh/release-notes/9.0',
                    '/zh/release-notes/8.6',
                    '/zh/release-notes/9.1-beta',
                    '/zh/release-notes/8.7-beta',
                    '/zh/release-notes/9.0-beta',
                    '/zh/release-notes/8.6-beta',
                    '/zh/release-notes/8.5-ppc',
                    '/zh/release-notes/8.5',
                    '/zh/release-notes/8.5-beta-ppc',
                    '/zh/release-notes/8.5-beta',
                    '/zh/release-notes/8.4-arm',
                    '/zh/release-notes/8.4',
                    '/zh/release-notes/8.4-beta-arm',
                    '/zh/release-notes/8.4-beta',
                    '/zh/release-notes/8.3',
                    '/zh/release-notes/8.3-rc',
                    '/zh/release-notes/8.3-beta'
                ]
            },
            {
                title: '安全指南',
                path: '/zh/documentation/guides',
                children: [
                    '/zh/documentation/openscap-guide',
                    '/zh/documentation/openscap-guide-for-9',
                    '/zh/documentation/oval-streams',
                    '/zh/documentation/sbom-guide',
                    '/zh/documentation/errata',
                ]
            },
        ]
    },
    {
        title: '安装',
        children: [
            '/zh/documentation/installation-guide',
            '/zh/documentation/after-installation-guide',
            '/zh/documentation/wsl',
            {
                title: 'Live Media',
                path: '/zh/LiveMedia',
            },
            '/zh/documentation/raspberry-pi',
            {
                title: '云镜像',
                path: '/zh/cloud',
                children: [
                    {
                        title: '通用云 （Cloud-init）',
                        path: '/zh/cloud',
                        children: [
                            '/zh/cloud/Generic-cloud',
                            '/zh/cloud/Generic-cloud-on-local',
                        ]
                    },
                    {
                        title: '亚马逊云',
                        path: '/zh/cloud',
                        children: [
                            '/zh/cloud/AWS',
                            '/zh/cloud/EC2-instance-connect',
                        ],
                    },
                    '/zh/cloud/Azure',
                    '/zh/cloud/Google',
                    '/zh/cloud/OCI',
                    '/zh/cloud/OpenNebula',
                ]
            },
            {
                title: '容器',
                path: '/zh/containers',
                children: [
                    '/zh/containers/docker-images'
                ]
            },
            {
                title: '存储库',
                path: '/zh/repos/',
                children: [
                    '/zh/repos/AlmaLinux',
                    '/zh/repos/CentOS',
                    '/zh/repos/Extras',
                    '/zh/repos/Synergy',
                ]
            },
        ]
    },
    {
        title: '迁移',
        path: '/zh/migration',
        children: [
            '/zh/documentation/migration-guide',
            {
                title: 'ELevate 项目',
                path: '/zh/elevate/',
                children: [
                    '/zh/elevate/ELevate-quickstart-guide',
                    '/zh/elevate/ELevating-CentOS7-to-AlmaLinux-9',
                    '/zh/elevate/ELevating-CentOS6-to-CentOS7',
                    '/zh/elevate/ELevate-offline-guide',
                    '/zh/elevate/ELevate-testing-guide',
                    '/zh/elevate/ELevate-NG-testing-guide',
                    '/zh/elevate/ELevate-frequent-issues',
                    '/zh/elevate/Contribution-guide',
                ]
            },
        ]
    },
    {
        title: '基金会',
        children: [
            '/zh/Transparency',
            '/zh/Election2022',
            '/zh/election2023',
            '/zh/gsoc',
        ]
    },
    '/zh/Help-and-Support',
]