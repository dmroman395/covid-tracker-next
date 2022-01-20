import React from 'react'
import NewsCard from './newsCard'
import styles from '../css/newsCardPanel.module.css'

const test = [
    {
      "path": "_news/2021-02-25-hong-kong-records-13-new-coronavirus-infections-three-of-them-untraceable.md",
      "title": "Hong Kong records 13 new coronavirus infections, three of them untraceable",
      "excerpt": "One of the untraceable cases involved a 62-year-old man who went to work the day after testing positive for reasons that remain unclear.",
      "sourceUrl": null,
      "webUrl": "https://www.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
      "originalUrl": "https://www.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
      "featuredContent": null,
      "highlight": null,
      "heat": 103,
      "tags": ["China-HongKong", "CN", "CN-HK"],
      "images": [
        {
          "url": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_coronavirus_generic/public/d8/images/methode/2021/02/25/1c14a918-7763-11eb-8b9d-76c80a88a6d4_image_hires_204027.jpg?itok=3AHu9yh1&v=1614256833",
          "width": 1200,
          "height": 630,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://amp.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
      "cdnAmpWebUrl": "https://amp-scmp-com.cdn.ampproject.org/c/s/amp.scmp.com/news/hong-kong/health-environment/article/3123077/hong-kong-records-13-new-coronavirus-infections",
      "publishedDateTime": "2021-02-25T06:55:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "South China Morning Post",
        "domain": "scmp.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in China", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-despite-covid-asian-outbound-real-estate-investment-recovering-in-2021.md",
      "title": "Despite Covid, Asian Outbound Real Estate Investment Recovering in 2021",
      "excerpt": "According to new research from global property consultant CBRE, Asian outbound commercial real estate investment volume declined 37% year-over-year to $30 billion in 2020, as Coronavirus-related obstacles including restrictions on travel and site inspections impeded purchasing activity.",
      "sourceUrl": null,
      "webUrl": "https://www.worldpropertyjournal.com/real-estate-news/singapore/commercial-real-estate-news-asian-property-investor-data-for-2020-cbre-asian-commercial-property-investment-report-cross-border-real-estate-investment-12395.php",
      "originalUrl": "https://www.worldpropertyjournal.com/real-estate-news/singapore/commercial-real-estate-news-asian-property-investor-data-for-2020-cbre-asian-commercial-property-investment-report-cross-border-real-estate-investment-12395.php",
      "featuredContent": null,
      "highlight": null,
      "heat": 70,
      "tags": null,
      "images": [
        {
          "url": "https://www.worldpropertyjournal.com/news-assets/Singapore-City-keyimage2.jpg",
          "width": 1400,
          "height": 636,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T06:53:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "International",
        "domain": "worldpropertyjournal.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-covid-19-testing-site-now-at-riverview-park-activities-center.md",
      "title": "COVID-19 testing site now at Riverview Park Activities Center",
      "excerpt": "The Riverview Park Activities Center is now a site for COVID-19 testing. Officials say testing will be available in the parking lot, just look for the PODS",
      "sourceUrl": null,
      "webUrl": "https://www.wjbf.com/news/covid-19-testing-site-now-at-riverview-park-activities-center/",
      "originalUrl": "https://www.wjbf.com/news/covid-19-testing-site-now-at-riverview-park-activities-center/",
      "featuredContent": null,
      "highlight": null,
      "heat": 75,
      "tags": null,
      "images": [
        {
          "url": "https://www.wjbf.com/wp-content/uploads/sites/47/2021/02/154362236_2826932214232743_6284941196951074119_n.jpg?w=1280",
          "width": 490,
          "height": 405,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.wjbf.com/news/covid-19-testing-site-now-at-riverview-park-activities-center/amp/",
      "cdnAmpWebUrl": "https://www-wjbf-com.cdn.ampproject.org/c/s/www.wjbf.com/news/covid-19-testing-site-now-at-riverview-park-activities-center/amp/",
      "publishedDateTime": "2021-02-25T06:51:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "WJBF",
        "domain": "wjbf.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-new-york-district-attorney-reportedly-obtains-trumps-financial-records-live.md",
      "title": "New York district attorney reportedly obtains Trump's financial records – live",
      "excerpt": "Millions of pages of documents received after president has attempted for years to keep his records, particularly tax returns, out of public view",
      "sourceUrl": null,
      "webUrl": "https://www.theguardian.com/us-news/live/2021/feb/25/joe-biden-kamala-harris-covid-coronavirus-vaccine-donald-trump-cpac-live-updates",
      "originalUrl": "https://www.theguardian.com/us-news/live/2021/feb/25/joe-biden-kamala-harris-covid-coronavirus-vaccine-donald-trump-cpac-live-updates",
      "featuredContent": null,
      "highlight": null,
      "heat": 86,
      "tags": ["US-NY"],
      "images": [
        {
          "url": "https://i.guim.co.uk/img/media/217e603b6b725cecaaa8e92cba452b33b4725a9e/0_267_4000_2400/master/4000.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=350ce288ff53be8e28b963cceec278e2",
          "width": 600,
          "height": 360,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://amp.theguardian.com/us-news/live/2021/feb/25/joe-biden-kamala-harris-covid-coronavirus-vaccine-donald-trump-cpac-live-updates",
      "cdnAmpWebUrl": "https://amp-theguardian-com.cdn.ampproject.org/c/s/amp.theguardian.com/us-news/live/2021/feb/25/joe-biden-kamala-harris-covid-coronavirus-vaccine-donald-trump-cpac-live-updates",
      "publishedDateTime": "2021-02-25T06:50:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "The Guardian",
        "domain": "theguardian.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/theguardian.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-coronavirus-live-news-china-approves-two-more-covid-vaccines-swedes-in-nursing-homes-can-see-family-again-after-two-jabs.md",
      "title": "Coronavirus live news: China approves two more Covid vaccines; Swedes in nursing homes can see family again after two jabs",
      "excerpt": "China now has four locally developed vaccines; Swedish health minister says elderly Swedes who are fully vaccinated can hug grandchildren",
      "sourceUrl": null,
      "webUrl": "https://www.theguardian.com/world/live/2021/feb/25/coronavirus-live-news-pfizer-vaccine-found-94-effective-in-major-study-eu-states-split-over-vaccine-passports?page=with:block-6037b2ae8f08614ccf106462",
      "originalUrl": "https://www.theguardian.com/world/live/2021/feb/25/coronavirus-live-news-pfizer-vaccine-found-94-effective-in-major-study-eu-states-split-over-vaccine-passports?page=with:block-6037b2ae8f08614ccf106462",
      "featuredContent": null,
      "highlight": null,
      "heat": 144,
      "tags": ["CN"],
      "images": [
        {
          "url": "https://i.guim.co.uk/img/media/f7468b65e6bf8537fc536478903c57d9941ef742/0_226_3500_2101/master/3500.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=75a743f5135e064b45c5987ef4f83e03",
          "width": 600,
          "height": 360,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://amp.theguardian.com/world/live/2021/feb/25/coronavirus-live-news-pfizer-vaccine-found-94-effective-in-major-study-eu-states-split-over-vaccine-passports",
      "cdnAmpWebUrl": "https://amp-theguardian-com.cdn.ampproject.org/c/s/amp.theguardian.com/world/live/2021/feb/25/coronavirus-live-news-pfizer-vaccine-found-94-effective-in-major-study-eu-states-split-over-vaccine-passports",
      "publishedDateTime": "2021-02-25T06:45:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "The Guardian",
        "domain": "theguardian.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/theguardian.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in China", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-japan-fears-covid-19-will-herald-shift-in-power-balance.md",
      "title": "Japan fears Covid-19 will herald shift in power balance",
      "excerpt": "TOKYO - History is dotted with plagues that have triggered a paradigm shift in the balance of power, Japanese Foreign Minister Toshimitsu Motegi said yesterday as he stressed the need to look to the past for lessons on how the world might emerge from the Covid-19 pandemic.",
      "sourceUrl": null,
      "webUrl": "https://www.straitstimes.com/asia/east-asia/japan-fears-covid-19-will-herald-shift-in-power-balance",
      "originalUrl": "https://www.straitstimes.com/asia/east-asia/japan-fears-covid-19-will-herald-shift-in-power-balance",
      "featuredContent": null,
      "highlight": null,
      "heat": 95,
      "tags": ["JP"],
      "images": [
        {
          "url": "https://static.straitstimes.com.sg/s3fs-public/styles/x_large/public/articles/2021/02/25/ak_jpcov2_2502.jpg?itok=DQEXkC4P",
          "width": 763,
          "height": 509,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T06:41:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "The Straits Times",
        "domain": "straitstimes.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Japan", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-shanghai-handed-asian-champions-league-berth-as-shandong-expulsion-confirmed.md",
      "title": "Shanghai handed Asian Champions League berth as Shandong expulsion confirmed",
      "excerpt": "Former Chinese champions Shanghai SIPG have earned a late call-up to the 2021 Asian Champions League after the Asian Football Confederation confirmed the expulsion of Shandong Luneng from the latest edition of the continental club championship.",
      "sourceUrl": null,
      "webUrl": "https://dunyanews.tv/en/Sports/589869-Shanghai-handed-Asian-Champions-League-berth-as-Shandong-expulsion",
      "originalUrl": "https://dunyanews.tv/en/Sports/589869-Shanghai-handed-Asian-Champions-League-berth-as-Shandong-expulsion",
      "featuredContent": null,
      "highlight": null,
      "heat": 82,
      "tags": ["China-Shanghai", "CN", "CN-SH"],
      "images": [
        {
          "url": "https://img.dunyanews.tv/news/2021/February/02-25-21/news_big_images/589869_17364543.jpg",
          "width": 556,
          "height": 370,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://dunyanews.tv/amp/english/589869.php",
      "cdnAmpWebUrl": "https://dunyanews-tv.cdn.ampproject.org/c/s/dunyanews.tv/amp/english/589869.php",
      "publishedDateTime": "2021-02-25T06:35:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Dunya News",
        "domain": "dunyanews.tv",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in China", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-santa-monica-school-playground-temporarily-closed-for-repairs.md",
      "title": "Santa Monica School Playground Temporarily Closed For Repairs",
      "excerpt": "The Roosevelt Elementary School playground is closed for temporary repairs and service, the Santa Monica-Malibu Unified School District said. The temporary closure for school and community use includes the field,",
      "sourceUrl": null,
      "webUrl": "https://patch.com/california/santamonica/santa-monica-school-playground-temporarily-closed-repairs",
      "originalUrl": "https://patch.com/california/santamonica/santa-monica-school-playground-temporarily-closed-repairs",
      "featuredContent": null,
      "highlight": null,
      "heat": 110,
      "tags": null,
      "images": [
        {
          "url": "https://patch.com/img/cdn20/shutterstock/753660/20210224/083628/styles/patch_image/public/shutterstock-145819646___24202418417.jpg?width=984",
          "width": 711,
          "height": 533,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://patch.com/california/santamonica/amp/29301423/santa-monica-school-playground-temporarily-closed-for-repairs",
      "cdnAmpWebUrl": "https://patch-com.cdn.ampproject.org/c/s/patch.com/california/santamonica/amp/29301423/santa-monica-school-playground-temporarily-closed-for-repairs",
      "publishedDateTime": "2021-02-25T06:33:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Patch",
        "domain": "patch.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Education Impact", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-rescinding-aca-may-worsen-racial-health-disparities-covid-19.md",
      "title": "Rescinding ACA May Worsen Racial Health Disparities, COVID-19",
      "excerpt": "If pre-existing condition protections are removed from the ACA, COVID-19 infection may lead to further racial health disparities in coverage.",
      "sourceUrl": null,
      "webUrl": "https://healthpayerintelligence.com/news/rescinding-aca-may-worsen-racial-health-disparities-covid-19",
      "originalUrl": "https://healthpayerintelligence.com/news/rescinding-aca-may-worsen-racial-health-disparities-covid-19",
      "featuredContent": null,
      "highlight": null,
      "heat": 75,
      "tags": null,
      "images": [
        {
          "url": "https://healthpayerintelligence.com/images/sized/GettyImages-529278709-3f32efd853ffed8e5d8a1184abc2c18d.jpg",
          "width": 480,
          "height": 278,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://healthpayerintelligence.com/news/amp/rescinding-aca-may-worsen-racial-health-disparities-covid-19",
      "cdnAmpWebUrl": "https://healthpayerintelligence-com.cdn.ampproject.org/c/s/healthpayerintelligence.com/news/amp/rescinding-aca-may-worsen-racial-health-disparities-covid-19",
      "publishedDateTime": "2021-02-25T06:31:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "healthpayerintelligence.com",
        "domain": "healthpayerintelligence.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-rep-reschenthaler-to-newsmax-tv-china-capitalized-on-pandemic-invaded-hong-kong.md",
      "title": "Rep. Reschenthaler to Newsmax TV: China Capitalized on Pandemic, Invaded Hong Kong",
      "excerpt": "China turned around and basically invaded Hong Kong, a quasi-independent city-state that was a Democracy, and took over this city-state against international treaties,” Reschenthaler said Wednesday during an appearance on Newsmax TV’s “Chris Salcedo Show.",
      "sourceUrl": null,
      "webUrl": "https://www.kabc.com/news/rep-reschenthaler-to-newsmax-tv-china-capitalized-on-pandemic-invaded-hong-kong/",
      "originalUrl": "https://www.kabc.com/news/rep-reschenthaler-to-newsmax-tv-china-capitalized-on-pandemic-invaded-hong-kong/",
      "featuredContent": null,
      "highlight": null,
      "heat": 74,
      "tags": ["China-HongKong", "CN", "CN-HK"],
      "images": [
        {
          "url": "https://www.newsmax.com/Newsmax/files/08/083d9d4a-1ff0-4a61-89e5-696da700b318.jpg",
          "width": 600,
          "height": 500,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T06:26:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "KABC",
        "domain": "kabc.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in China", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-over-1000-tokyo-2020-volunteers-quit-over-covid-19-concerns.md",
      "title": "Over 1,000 Tokyo 2020 volunteers quit over COVID-19 concerns",
      "excerpt": "A large number of Olympics volunteers have decided to quit over the past month, organisers have said the number is around 1,000.",
      "sourceUrl": null,
      "webUrl": "https://www.espn.com.au/olympics/story/_/id/30961748/over-1000-tokyo-2020-volunteers-quit-covid-19-concerns",
      "originalUrl": "https://www.espn.com.au/olympics/story/_/id/30961748/over-1000-tokyo-2020-volunteers-quit-covid-19-concerns",
      "featuredContent": null,
      "highlight": null,
      "heat": 105,
      "tags": ["JP"],
      "images": [
        {
          "url": "https://a1.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0225%2Fr819340_1296x729_16%2D9.jpg",
          "width": 1296,
          "height": 729,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.espn.com.au/olympics/story/_/id/30961748/over-1000-tokyo-2020-volunteers-quit-covid-19-concerns?platform=amp",
      "cdnAmpWebUrl": "https://www-espn-com-au.cdn.ampproject.org/c/s/www.espn.com.au/olympics/story/_/id/30961748/over-1000-tokyo-2020-volunteers-quit-covid-19-concerns?platform=amp",
      "publishedDateTime": "2021-02-25T06:25:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "ESPN.com",
        "domain": "espn.com.au",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Japan", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-quick-service-restaurant-qsr-it-market-sales-to-receive-a-boost-due-to-covid-19-marketus-study.md",
      "title": "Quick Service Restaurant (QSR) IT Market Sales to Receive a Boost Due to COVID-19: Market.us Study",
      "excerpt": "The latest research report provides a complete assessment of the Global Quick Service Restaurant (QSR) IT market for the forecast year 2022-2031, which is beneficial for companies regardless of their size and revenue.",
      "sourceUrl": null,
      "webUrl": "https://www.marketwatch.com/press-release/quick-service-restaurant-qsr-it-market-sales-to-receive-a-boost-due-to-covid-19-marketus-study-2021-02-25",
      "originalUrl": "https://www.marketwatch.com/press-release/quick-service-restaurant-qsr-it-market-sales-to-receive-a-boost-due-to-covid-19-marketus-study-2021-02-25",
      "featuredContent": null,
      "highlight": null,
      "heat": 81,
      "tags": null,
      "images": [
        {
          "url": "https://mw3.wsj.net/mw5/content/logos/mw_logo_social.png",
          "width": 1200,
          "height": 630,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T06:22:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "MarketWatch",
        "domain": "marketwatch.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/marketwatch.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Stock Impact", "Coronavirus", "Coronavirus in Asia"]
    },
    {
      "path": "_news/2021-02-25-unemployment-claims-dropped-last-week-as-coronavirus-cases-eased.md",
      "title": "Unemployment claims dropped last week as coronavirus cases eased.",
      "excerpt": "The Labor Department is scheduled to release its weekly report on applications for government unemployment insurance.",
      "sourceUrl": null,
      "webUrl": "https://www.nytimes.com/2021/02/25/business/unemployment-claims.html",
      "originalUrl": "https://www.nytimes.com/2021/02/25/business/unemployment-claims.html",
      "featuredContent": null,
      "highlight": null,
      "heat": 105,
      "tags": null,
      "images": [
        {
          "url": "https://static01.nyt.com/images/2021/02/25/us/25economy-briefing-jobless/25economy-briefing-jobless-facebookJumbo.jpg",
          "width": 1050,
          "height": 550,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.nytimes.com/2021/02/25/business/unemployment-claims.amp.html",
      "cdnAmpWebUrl": "https://www-nytimes-com.cdn.ampproject.org/c/s/www.nytimes.com/2021/02/25/business/unemployment-claims.amp.html",
      "publishedDateTime": "2021-02-25T06:19:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "New York Times",
        "domain": "nytimes.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/nytimes.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Travel Impact", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-coronavirus-latest-news-police-chief-blames-surge-in-covid-breaches-on-lockdown-fatigue.md",
      "title": "Coronavirus latest news: Police chief blames surge in Covid breaches on 'lockdown fatigue'",
      "excerpt": "A police chief has blamed lockdown \"fatigue\" for a rise in Covid-19 rulebreakers as new figures show almost 40 per cent of all fines issued for breaches of coronavirus regulations came in just four weeks.",
      "sourceUrl": null,
      "webUrl": "https://www.telegraph.co.uk/global-health/science-and-disease/coronavirus-news-covid-vaccine-schools-lockdown-roadmap/",
      "originalUrl": "https://www.telegraph.co.uk/global-health/science-and-disease/coronavirus-news-covid-vaccine-schools-lockdown-roadmap/",
      "featuredContent": null,
      "highlight": null,
      "heat": 70,
      "tags": null,
      "images": [
        {
          "url": "https://www.telegraph.co.uk/content/dam/global-health/2021/02/25/TELEMMGLPICT000251618145_trans_NvBQzQNjv4BqpVlberWd9EgFPZtcLiMQfyf2A9a6I9YchsjMeADBa08.jpeg",
          "width": 2501,
          "height": 1563,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.telegraph.co.uk/global-health/science-and-disease/coronavirus-news-covid-vaccine-schools-lockdown-roadmap/amp/",
      "cdnAmpWebUrl": "https://www-telegraph-co-uk.cdn.ampproject.org/c/s/www.telegraph.co.uk/global-health/science-and-disease/coronavirus-news-covid-vaccine-schools-lockdown-roadmap/amp/",
      "publishedDateTime": "2021-02-25T06:15:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "The Daily Telegraph",
        "domain": "telegraph.co.uk",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-harris-acknowledges-righteous-skepticism-over-covid-19-vaccine-but-says-it-will-save-your-life.md",
      "title": "Harris acknowledges 'righteous skepticism' over COVID-19 vaccine, but says 'it will save your life'",
      "excerpt": "Vice President Kamala Harris is urging Americans to get vaccinated for coronavirus while acknowledging the mistrust some have for medical research and development.",
      "sourceUrl": null,
      "webUrl": "https://www.foxnews.com/politics/harris-covid-vaccine-skepticism-save-your-life",
      "originalUrl": "https://www.foxnews.com/politics/harris-covid-vaccine-skepticism-save-your-life",
      "featuredContent": null,
      "highlight": null,
      "heat": 81,
      "tags": null,
      "images": [
        {
          "url": "https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2021/02/640/320/Kamala-Harris-COVID-19-Vaccine-AP.jpg?ve=1&tl=1",
          "width": 640,
          "height": 320,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.foxnews.com/politics/harris-covid-vaccine-skepticism-save-your-life.amp",
      "cdnAmpWebUrl": "https://www-foxnews-com.cdn.ampproject.org/c/s/www.foxnews.com/politics/harris-covid-vaccine-skepticism-save-your-life.amp",
      "publishedDateTime": "2021-02-25T06:15:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Fox News",
        "domain": "foxnews.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/foxnews.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-moderna-expects-184-billion-in-covid-19-vaccine-sales-in-2021.md",
      "title": "Moderna expects $18.4 billion in COVID-19 vaccine sales in 2021",
      "excerpt": "Moderna Inc said on Thursday it expects COVID-19 vaccine sales of $18.4 billion this year, above the $15 billion in sales forecast by Pfizer Inc for the only other vaccine authorized for emergency use in the United States so far.",
      "sourceUrl": null,
      "webUrl": "https://www.reuters.com/article/us-health-coronavirus-moderna/moderna-sees-184-billion-in-sales-from-covid-19-vaccine-in-2021-idUSKBN2AP1JL",
      "originalUrl": "https://www.reuters.com/article/us-health-coronavirus-moderna/moderna-sees-184-billion-in-sales-from-covid-19-vaccine-in-2021-idUSKBN2AP1JL",
      "featuredContent": null,
      "highlight": null,
      "heat": 145,
      "tags": null,
      "images": [
        {
          "url": "https://s4.reutersmedia.net/resources/r/?m=02&d=20210225&t=2&i=1552876640&w=&fh=545px&fw=&ll=&pl=&sq=&r=LYNXMPEH1O0US",
          "width": 817,
          "height": 545,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://mobile.reuters.com/article/amp/idUSKBN2AP1JG",
      "cdnAmpWebUrl": "https://mobile-reuters-com.cdn.ampproject.org/c/s/mobile.reuters.com/article/amp/idUSKBN2AP1JG",
      "publishedDateTime": "2021-02-25T06:10:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Reuters",
        "domain": "reuters.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/reuters.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Treatment", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-covid-19-lockdowns-give-china-breathing-room-on-air-quality-targets.md",
      "title": "Covid-19 lockdowns give China breathing room on air quality targets",
      "excerpt": "Environment ministry reports PM2.5 pollution reductions meet national standard, if effects of pandemic discounted.",
      "sourceUrl": null,
      "webUrl": "https://www.scmp.com/news/china/politics/article/3123161/covid-19-lockdowns-give-china-breathing-room-air-quality",
      "originalUrl": "https://www.scmp.com/news/china/politics/article/3123161/covid-19-lockdowns-give-china-breathing-room-air-quality",
      "featuredContent": null,
      "highlight": null,
      "heat": 115,
      "tags": ["CN"],
      "images": [
        {
          "url": "https://cdn.i-scmp.com/sites/default/files/styles/og_image_scmp_generic/public/d8/images/methode/2021/02/25/c4cd857a-7754-11eb-8b9d-76c80a88a6d4_image_hires_213028.jpg?itok=m-3RxExp&v=1614259837",
          "width": 1200,
          "height": 630,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://amp.scmp.com/news/china/politics/article/3123161/covid-19-lockdowns-give-china-breathing-room-air-quality",
      "cdnAmpWebUrl": "https://amp-scmp-com.cdn.ampproject.org/c/s/amp.scmp.com/news/china/politics/article/3123161/covid-19-lockdowns-give-china-breathing-room-air-quality",
      "publishedDateTime": "2021-02-25T06:03:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "South China Morning Post",
        "domain": "scmp.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in China", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-washington-dc-police-fight-a-rise-in-carjackings-and-blame-covid-19.md",
      "title": "Washington, D.C., Police Fight a Rise in Carjackings and Blame Covid-19",
      "excerpt": "The nation’s capital and other cities report sharp increases in carjackings in 2020.",
      "sourceUrl": null,
      "webUrl": "https://www.wsj.com/articles/washington-d-c-police-fight-a-rise-in-carjackings-and-blame-covid-19-11614261600",
      "originalUrl": "https://www.wsj.com/articles/washington-d-c-police-fight-a-rise-in-carjackings-and-blame-covid-19-11614261600",
      "featuredContent": null,
      "highlight": null,
      "heat": 115,
      "tags": ["US-DC"],
      "images": [
        {
          "url": "https://images.wsj.net/im-303368/social",
          "width": 1280,
          "height": 640,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.wsj.com/amp/articles/washington-d-c-police-fight-a-rise-in-carjackings-and-blame-covid-19-11614261600",
      "cdnAmpWebUrl": "https://www-wsj-com.cdn.ampproject.org/c/s/www.wsj.com/amp/articles/washington-d-c-police-fight-a-rise-in-carjackings-and-blame-covid-19-11614261600",
      "publishedDateTime": "2021-02-25T06:01:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Wall Street Journal",
        "domain": "wsj.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/wsj.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-australian-bid-put-on-ioc-fast-track-to-host-2032-olympics.md",
      "title": "Australian bid put on IOC fast track to host 2032 Olympics",
      "excerpt": "Did the Australian city of Brisbane just get picked as the host of the 2032 Olympics? It looked that way Wednesday when the International Olympic Committee named the",
      "sourceUrl": null,
      "webUrl": "https://apnews.com/article/australia-thomas-bach-brisbane-2020-tokyo-olympics-queensland-84821cc188179912ba06db06e9577450",
      "originalUrl": "https://apnews.com/article/australia-thomas-bach-brisbane-2020-tokyo-olympics-queensland-84821cc188179912ba06db06e9577450",
      "featuredContent": null,
      "highlight": null,
      "heat": 90,
      "tags": ["JP"],
      "images": [
        {
          "url": "https://storage.googleapis.com/afs-prod/media/c67d0142b8f6486c8d8d62c14e0b926c/3000.jpeg",
          "width": 3000,
          "height": 2187,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T06:00:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Associated Press",
        "domain": "apnews.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/apnews.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Japan", "Coronavirus in Asia", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-governor-lujan-grisham-new-mexico-officials-to-provide-covid-19-update.md",
      "title": "Governor Lujan Grisham, New Mexico officials to provide COVID-19 update",
      "excerpt": "Governor Michelle Lujan Grisham and New Mexico officials will host a remote news conference at 3:30 p.m. on Thursday, Feb. 25 to provide an update on COVID-19 in the state.",
      "sourceUrl": null,
      "webUrl": "https://www.krqe.com/health/coronavirus-new-mexico/governor-lujan-grisham-new-mexico-officials-to-provide-covid-19-update/",
      "originalUrl": "https://www.krqe.com/health/coronavirus-new-mexico/governor-lujan-grisham-new-mexico-officials-to-provide-covid-19-update/",
      "featuredContent": null,
      "highlight": null,
      "heat": 75,
      "tags": ["US-NM"],
      "images": [
        {
          "url": "https://www.krqe.com/wp-content/uploads/sites/12/2021/01/Michelle-Lujan-Grisham.jpg?w=1280",
          "width": 833,
          "height": 455,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.krqe.com/health/coronavirus-new-mexico/governor-lujan-grisham-new-mexico-officials-to-provide-covid-19-update/amp/",
      "cdnAmpWebUrl": "https://www-krqe-com.cdn.ampproject.org/c/s/www.krqe.com/health/coronavirus-new-mexico/governor-lujan-grisham-new-mexico-officials-to-provide-covid-19-update/amp/",
      "publishedDateTime": "2021-02-25T05:58:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "KRQE",
        "domain": "krqe.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-live-updates-in-a-50-50-senate-one-democrats-power-swells.md",
      "title": "Live Updates: In a 50-50 Senate, One Democrat’s Power Swells",
      "excerpt": "Senator Joe Manchin, the most conservative Democrat in the chamber, has more leverage than ever before, and his votes can bless or curse his party’s priorities.",
      "sourceUrl": null,
      "webUrl": "https://www.nytimes.com/live/2021/02/25/us/joe-biden-news",
      "originalUrl": "https://www.nytimes.com/live/2021/02/25/us/joe-biden-news",
      "featuredContent": null,
      "highlight": null,
      "heat": 90,
      "tags": null,
      "images": [
        {
          "url": "https://static01.nyt.com/images/2021/02/24/us/politics/24new-washington-briefing-ManchinSetUp/24new-washington-briefing-ManchinSetUp-facebookJumbo.jpg",
          "width": 1050,
          "height": 550,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.nytimes.com/live/2021/02/25/us/joe-biden-news.amp.html",
      "cdnAmpWebUrl": "https://www-nytimes-com.cdn.ampproject.org/c/s/www.nytimes.com/live/2021/02/25/us/joe-biden-news.amp.html",
      "publishedDateTime": "2021-02-25T05:57:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "New York Times",
        "domain": "nytimes.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/nytimes.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Political Impact", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-california-reaches-another-bleak-milestone.md",
      "title": "California Reaches Another Bleak Milestone",
      "excerpt": "More than 50,000 people have died from Covid-19 in the state. Also: More on the Newsom recall effort; and remembering Fry’s Electronics.",
      "sourceUrl": null,
      "webUrl": "https://www.nytimes.com/2021/02/25/us/california-covid.html",
      "originalUrl": "https://www.nytimes.com/2021/02/25/us/california-covid.html",
      "featuredContent": null,
      "highlight": null,
      "heat": 110,
      "tags": ["US-CA"],
      "images": [
        {
          "url": "https://static01.nyt.com/images/2021/02/25/us/25deathscatoday/merlin_184227360_e415f57f-ff21-49c0-8de6-505a59b5fa18-facebookJumbo.jpg",
          "width": 1050,
          "height": 550,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.nytimes.com/2021/02/25/us/california-covid.amp.html",
      "cdnAmpWebUrl": "https://www-nytimes-com.cdn.ampproject.org/c/s/www.nytimes.com/2021/02/25/us/california-covid.amp.html",
      "publishedDateTime": "2021-02-25T05:55:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "New York Times",
        "domain": "nytimes.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/nytimes.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-modernas-covid-19-booster-plan-jjs-day-at-the-fda-consolidation-among-the-contractors.md",
      "title": "Moderna’s Covid-19 booster plan, J&J’s day at the FDA, & consolidation among the contractors",
      "excerpt": "Damian covers biotech, is a co-writer of The Readout newsletter, and a co-host of \"The Readout LOUD\" podcast. FDA scientists endorse J&J’s Covid vaccine, as new data… FDA scientists endorse J&J’s Covid vaccine, as new data shed light on efficacy How Covid-19 could usher in a new role for… How Covid-19 could usher in a new role for continuous glucose monitoring in hospitals Comparing the Covid-19 vaccines developed by Pfizer, Moderna, and… Comparing the Covid-19 vaccines developed by Pfizer, Moderna, and Johnson & Johnson Recommended J&J’s vaccine data, OpenBiome’s last days, & making the… J&J’s vaccine data, OpenBiome’s last days, & making the most of soaring stock Vaccine execs go to Washington, Moderna’s future revenue, &… Vaccine execs go to Washington, Moderna’s future revenue, & Brainstorm’s FDA setback Democratizing research, vaccine trials lack diversity, & a PDUFA… Democratizing research, vaccine trials lack diversity, & a PDUFA for Sarepta",
      "sourceUrl": null,
      "webUrl": "https://www.statnews.com/2021/02/25/modernas-covid-19-booster-plan-jjs-day-at-the-fda-consolidation-among-the-contractors/",
      "originalUrl": "https://www.statnews.com/2021/02/25/modernas-covid-19-booster-plan-jjs-day-at-the-fda-consolidation-among-the-contractors/",
      "featuredContent": null,
      "highlight": null,
      "heat": 74,
      "tags": null,
      "images": [
        {
          "url": "https://www.statnews.com/wp-content/uploads/2016/06/READOUT-800x576.gif",
          "width": 800,
          "height": 576,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T05:52:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "STAT",
        "domain": "statnews.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Treatment", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-university-of-delaware-has-seen-over-140-covid-19-cases-since-tuesday.md",
      "title": "University of Delaware has seen over 140 COVID-19 cases since Tuesday",
      "excerpt": "The University of Delaware is tightening its coronavirus restrictions and urging students to reduce time indoors with others amid an explosion of new coronavirus cases on campus over the last two days.",
      "sourceUrl": null,
      "webUrl": "https://www.fox29.com/news/university-of-delaware-has-seen-over-140-covid-19-cases-since-tuesday",
      "originalUrl": "https://www.fox29.com/news/university-of-delaware-has-seen-over-140-covid-19-cases-since-tuesday",
      "featuredContent": null,
      "highlight": null,
      "heat": 85,
      "tags": ["US-DE"],
      "images": [
        {
          "url": "https://images.foxtv.com/static.fox29.com/www.fox29.com/content/uploads/2020/11/932/470/University-of-Delaware.jpeg?ve=1&tl=1",
          "width": 932,
          "height": 470,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://www.fox29.com/news/university-of-delaware-has-seen-over-140-covid-19-cases-since-tuesday.amp",
      "cdnAmpWebUrl": "https://www-fox29-com.cdn.ampproject.org/c/s/www.fox29.com/news/university-of-delaware-has-seen-over-140-covid-19-cases-since-tuesday.amp",
      "publishedDateTime": "2021-02-25T05:48:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "FOX 29",
        "domain": "fox29.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-us-jobless-claims-fall-but-more-uk-workers-on-furlough-business-live.md",
      "title": "US jobless claims fall, but more UK workers on furlough – business live",
      "excerpt": "Rolling coverage of the latest economic and financial news",
      "sourceUrl": null,
      "webUrl": "https://www.theguardian.com/business/live/2021/feb/25/markets-rebound-inflation-economy-covid-ftse-dow-gamestop-business-live?page=with:block-60377df98f088c613add2277",
      "originalUrl": "https://www.theguardian.com/business/live/2021/feb/25/markets-rebound-inflation-economy-covid-ftse-dow-gamestop-business-live?page=with:block-60377df98f088c613add2277",
      "featuredContent": null,
      "highlight": null,
      "heat": 90,
      "tags": ["GB", "UK"],
      "images": [
        {
          "url": "https://i.guim.co.uk/img/media/b4072bcc7ba5192d51c37878f5a8677f49d946df/0_384_5760_3456/master/5760.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=1d900c84f4952693460281960c759286",
          "width": 600,
          "height": 360,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://amp.theguardian.com/business/live/2021/feb/25/markets-rebound-inflation-economy-covid-ftse-dow-gamestop-business-live",
      "cdnAmpWebUrl": "https://amp-theguardian-com.cdn.ampproject.org/c/s/amp.theguardian.com/business/live/2021/feb/25/markets-rebound-inflation-economy-covid-ftse-dow-gamestop-business-live",
      "publishedDateTime": "2021-02-25T05:46:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "The Guardian",
        "domain": "theguardian.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/theguardian.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Europe", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-czech-republic-confirms-first-case-of-covid-19-south-african-variant.md",
      "title": "Czech Republic confirms first case of COVID-19 South African variant",
      "excerpt": "The Czech Republic has confirmed its first case of the COVID-19 variant first detected in South Africa, the Health Ministry said on Thursday.",
      "sourceUrl": null,
      "webUrl": "https://www.reuters.com/article/health-coronavirus-czech-variants-idUSL8N2KV7M6",
      "originalUrl": "https://www.reuters.com/article/health-coronavirus-czech-variants-idUSL8N2KV7M6",
      "featuredContent": null,
      "highlight": null,
      "heat": 85,
      "tags": null,
      "images": null,
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://mobile.reuters.com/article/amp/idUSL8N2KV7M6",
      "cdnAmpWebUrl": "https://mobile-reuters-com.cdn.ampproject.org/c/s/mobile.reuters.com/article/amp/idUSL8N2KV7M6",
      "publishedDateTime": "2021-02-25T05:40:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Reuters",
        "domain": "reuters.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/reuters.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Travel Impact", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-should-you-buy-apple-stock-after-the-recent-correction.md",
      "title": "Should You Buy Apple Stock After The Recent Correction?",
      "excerpt": "Apple stock dropped -5.5% over the last five trading days and has underperformed the S&P 500 which fell by a little over -1% during the same period. The stock is also down by almost -10% over the last 21 trading days.",
      "sourceUrl": null,
      "webUrl": "https://www.forbes.com/sites/greatspeculations/2021/02/25/should-you-buy-apple-stock-after-the-recent-correction/",
      "originalUrl": "https://www.forbes.com/sites/greatspeculations/2021/02/25/should-you-buy-apple-stock-after-the-recent-correction/",
      "featuredContent": null,
      "highlight": null,
      "heat": 85,
      "tags": null,
      "images": [
        {
          "url": "https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60370ad1a58178dfa2cd4e77%2F0x0.jpg",
          "width": 1200,
          "height": 800,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T05:40:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Forbes",
        "domain": "forbes.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/forbes.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Stock Impact", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-saskatchewan-seeks-to-build-a-containment-level-4-lab-to-research-pandemics.md",
      "title": "Saskatchewan seeks to build a containment level 4 lab to research pandemics",
      "excerpt": "Regina - Vertical integration, where you control all aspects of your operation, is what Saskatchewan's Vaccine and Infectious Disease Organization (VIDO)",
      "sourceUrl": null,
      "webUrl": "https://www.plant.ca/health-safety/saskatchewan-seeks-to-build-a-containment-level-4-lab-to-research-pandemics-200099/",
      "originalUrl": "https://www.plant.ca/health-safety/saskatchewan-seeks-to-build-a-containment-level-4-lab-to-research-pandemics-200099/",
      "featuredContent": null,
      "highlight": null,
      "heat": 83,
      "tags": ["CA", "CA-SK"],
      "images": [
        {
          "url": "https://www.plant.ca/wp-content/uploads/2021/01/Plant-news-2-e1610546281520.jpg",
          "width": 1874,
          "height": 937,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T05:34:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "plant.ca",
        "domain": "plant.ca",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in Canada", "Coronavirus", "Treatment"]
    },
    {
      "path": "_news/2021-02-25-walmart-hosting-covid-19-vaccine-events-in-oklahoma.md",
      "title": "Walmart hosting COVID-19 vaccine events in Oklahoma",
      "excerpt": "As many more Oklahomans are now eligible to receive a COVID-19 vaccine, Walmart says it is here to help. Walmart will begin administering Pfizer COVID-19 vaccines on Feb. 27 in greater Oklahoma City with a clinic inside the Walmart Pharmacy,",
      "sourceUrl": null,
      "webUrl": "https://kfor.com/news/local/walmart-hosting-covid-19-vaccine-events-in-oklahoma/",
      "originalUrl": "https://kfor.com/news/local/walmart-hosting-covid-19-vaccine-events-in-oklahoma/",
      "featuredContent": null,
      "highlight": null,
      "heat": 75,
      "tags": ["US-OK"],
      "images": [
        {
          "url": "https://kfor.com/wp-content/uploads/sites/3/2021/02/AP21054752218980.jpg?w=1280",
          "width": 1280,
          "height": 853,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": "https://kfor.com/news/local/walmart-hosting-covid-19-vaccine-events-in-oklahoma/amp/",
      "cdnAmpWebUrl": "https://kfor-com.cdn.ampproject.org/c/s/kfor.com/news/local/walmart-hosting-covid-19-vaccine-events-in-oklahoma/amp/",
      "publishedDateTime": "2021-02-25T05:34:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Oklahoma's News",
        "domain": "kfor.com",
        "images": null,
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    },
    {
      "path": "_news/2021-02-25-town-board-in-maine-contends-mask-mandates-violate-the-ada.md",
      "title": "Town board in Maine contends mask mandates violate the ADA",
      "excerpt": "The leaders of a town in western Maine say the governor's executive order requiring people to wear masks during the pandemic violates the Americans With",
      "sourceUrl": null,
      "webUrl": "https://apnews.com/article/coronavirus-pandemic-bangor-maine-98cef94d138c70c9997ee2108fe95f38",
      "originalUrl": "https://apnews.com/article/coronavirus-pandemic-bangor-maine-98cef94d138c70c9997ee2108fe95f38",
      "featuredContent": null,
      "highlight": null,
      "heat": 70,
      "tags": ["US-ME"],
      "images": [
        {
          "url": "https://apnews.com/images/ShareLogo2.png",
          "width": 700,
          "height": 450,
          "title": null,
          "attribution": null,
          "isCached": true
        }
      ],
      "content": "\r\n",
      "type": "article",
      "ampWebUrl": null,
      "cdnAmpWebUrl": null,
      "publishedDateTime": "2021-02-25T05:29:00-08:00",
      "updatedDateTime": null,
      "provider": {
        "name": "Associated Press",
        "domain": "apnews.com",
        "images": [
          {
            "url": "https://insideout.github.io/coronavirus/assets/images/organizations/apnews.com-50x50.jpg",
            "width": 50,
            "height": 50,
            "title": null,
            "attribution": null,
            "isCached": false
          }
        ],
        "publishers": null,
        "authors": null
      },
      "locale": "en-us",
      "categories": ["news"],
      "topics": ["Coronavirus in US", "Coronavirus"]
    }
  ]

function NewsCardPanel() {
    const newsCardList = test.map((article, i) => {
        return <NewsCard data={article} key={i}/>
    })

    return(
        <div className={styles.newsCardPanel}>
            {newsCardList}
        </div>
    )
}

export default NewsCardPanel