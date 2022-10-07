const gql = async (query) => {
  return [{ id: 1, name: 'Bruce Wayne' }];
};

const peoplesJson = {
  person: [
    {
      userid: 1470,
      email: 'marcel.korporaal@bettyblocks.com',
      title: 'Betty Blocks Solution Engineer',
      firstname: 'Marcel',
      lastname: 'Korporaal',
      goesby: null,
      id: 1,
      httpavatar:
        'https://portal.gunder.com/gunder/images/griffin/socialdealroom/avatar_v4/48avatar.png',
      avatar:
        'https://portal.gunder.com/gunder/api/2/users/1470/avatar?size=48&lastmodifieddate=1664905492313',
      userlink: 'https://portal.gunder.com/gunder/api/2/users/1470',
      httplink:
        'https://portal.gunder.com/gunder/viewUserProfile.action?metaData.encryptTargetUserID=M8dzjm2kajk=&metaData.updateUserProfileProcess=true',
      orgname: 'Betty Blocks',
      orgid: 26,
      orgaddress: ',,,,(Unknown),,',
    },
    {
      id: 2,
      userid: 993,
      email: 'asaiger@gunder.com',
      title: 'Practice Innovation Attorney',
      firstname: 'Abraham',
      lastname: 'Saiger',
      goesby: null,
      httpavatar:
        'https://portal.gunder.com/gunder/images/griffin/socialdealroom/avatar_v4/48avatar.png',
      avatar:
        'https://portal.gunder.com/gunder/api/2/users/993/avatar?size=48&lastmodifieddate=1665066711467',
      userlink: 'https://portal.gunder.com/gunder/api/2/users/993',
      httplink:
        'https://portal.gunder.com/gunder/viewUserProfile.action?metaData.encryptTargetUserID=dNlUApz2LaM=&metaData.updateUserProfileProcess=true',
      orgname: 'Gunderson Dettmer',
      orgid: 3,
      orgaddress: ',,,,USA,,',
      phone: '$$650-463-5487',
      department: 'Associate',
    },
    {
      id: 3,
      userid: 488,
      email: 'jgoodwin@gunder.com',
      title: 'Venture Fund/Tax Partner',
      firstname: 'Jonathan',
      lastname: 'Goodwin',
      goesby: null,
      httpavatar:
        'https://portal.gunder.com/gunder/images/griffin/socialdealroom/avatar_v4/48avatar.png',
      avatar:
        'https://portal.gunder.com/gunder/api/2/users/488/avatar?size=48&lastmodifieddate=1664978920860',
      userlink: 'https://portal.gunder.com/gunder/api/2/users/488',
      httplink:
        'https://portal.gunder.com/gunder/viewUserProfile.action?metaData.encryptTargetUserID=AA4EvNK2i0k=&metaData.updateUserProfileProcess=true',
      orgname: 'Gunderson Dettmer',
      orgid: 3,
      orgaddress: ',,,,USA,,',
      phone: '$$650-463-5366',
      department: 'Partner',
    },
    {
      id: 4,
      userid: 1003,
      email: 'lstiver@gunder.com',
      title: 'Innovation Specialist',
      firstname: 'Lesley',
      lastname: 'Stiver',
      goesby: null,
      httpavatar:
        'https://portal.gunder.com/gunder/downloadUserAvatar.action?user.userId=1003&user.avatarWidth=48&user.lastModifiedTime=1665067813853&encryptedUserId=dXNlcl8xNDcw',
      avatar:
        'https://portal.gunder.com/gunder/api/2/users/1003/avatar?size=48&lastmodifieddate=1665067813853',
      userlink: 'https://portal.gunder.com/gunder/api/2/users/1003',
      httplink:
        'https://portal.gunder.com/gunder/viewUserProfile.action?metaData.encryptTargetUserID=4plihahs120=&metaData.updateUserProfileProcess=true',
      orgname: 'Gunderson Dettmer',
      orgid: 3,
      orgaddress: ',,,,USA,,',
      phone: '$$650-324-5172',
      department: 'IT',
    },
    {
      id: 5,
      userid: 838,
      email: 'lkopmeyer@gunder.com',
      title: 'Lead Client Innovation Specialist',
      firstname: 'Luke',
      lastname: 'Kopmeyer',
      goesby: null,
      httpavatar:
        'https://portal.gunder.com/gunder/downloadUserAvatar.action?user.userId=838&user.avatarWidth=48&user.lastModifiedTime=1665066244360&encryptedUserId=dXNlcl8xNDcw',
      avatar:
        'https://portal.gunder.com/gunder/api/2/users/838/avatar?size=48&lastmodifieddate=1665066244360',
      userlink: 'https://portal.gunder.com/gunder/api/2/users/838',
      httplink:
        'https://portal.gunder.com/gunder/viewUserProfile.action?metaData.encryptTargetUserID=c2KmBixYdL8=&metaData.updateUserProfileProcess=true',
      orgname: 'Gunderson Dettmer',
      orgid: 3,
      orgaddress: ',,,,USA,,',
      phone: '$$650-324-5177',
      department: 'IT',
    },
  ],
};

const sitesJson = {
  site: [
    {
      id: 1938,
      sitename: 'LAK Workspace',
      role: 'CONTENT_ADMIN, MEMBER_ADMIN, QA_ADMIN, REPORTING_ADMIN, SITE_ADMIN',
      sitedescription: '',
      sitefolderID: '43366',
      module: {
        home: {
          enable: '1',
        },
        activity: {
          enable: '1',
        },
        document: {
          enable: '1',
        },
        wiki: {
          enable: '1',
        },
        blog: {
          enable: '1',
        },
        task: {
          timelineview: '0',
          enable: '1',
        },
        event: {
          enable: '1',
        },
        isheet: {
          enable: '1',
        },
        qa: {
          enable: '1',
        },
        people: {
          enable: '1',
        },
      },
      adminnote: '',
      categories: {
        category: [
          {
            id: '1',
            name: 'None',
            httplink: null,
          },
        ],
      },
      startdate: '01 Jun 2021',
      enddate: '',
      createddate: '01 Jun 2021',
      status: 'Active',
      size: '121.10 MB',
      rawsitesize: {
        activedocumentsize: 126983520,
        deleteddocumentsize: 46948907,
        totalsize: 173932427,
      },
      siteowner: {
        firstname: 'Luke',
        lastname: 'Kopmeyer',
        email: 'lkopmeyer@gunder.com',
        userid: 838,
      },
      isSyncable: 1,
      file: {
        permissionlevel: 'SITE_AND_FOLDERS',
        approvaldocumentworkflow: null,
        allowbulkdownload: null,
        emailnotification: null,
        showsitemap: null,
        inbox: null,
        emailmetadata: null,
      },
      sitenametranslations: {
        translation: [
          {
            languagecode: 'en_GB',
            value: 'LAK Workspace',
          },
        ],
      },
      enabledocumentredaction: true,
      mentiongroups: 0,
    },
    {
      id: 6550,
      sitename: 'My site',
      role: 'CONTENT_ADMIN, MEMBER_ADMIN, QA_ADMIN, REPORTING_ADMIN, SITE_ADMIN',
      sitedescription: '',
      sitefolderID: '100383',
      module: {
        home: {
          enable: '0',
        },
        activity: {
          enable: '0',
        },
        document: {
          enable: '1',
        },
        wiki: {
          enable: '0',
        },
        blog: {
          enable: '0',
        },
        task: {
          timelineview: '0',
          enable: '1',
        },
        event: {
          enable: '0',
        },
        isheet: {
          enable: '0',
        },
        qa: {
          enable: '0',
        },
        people: {
          enable: '0',
        },
      },
      adminnote: '',
      categories: {
        category: [
          {
            id: '1',
            name: 'None',
            httplink: null,
          },
        ],
      },
      startdate: '',
      enddate: '',
      createddate: '04 Oct 2022',
      status: 'Active',
      size: '0.0 bytes',
      rawsitesize: {
        activedocumentsize: 0,
        deleteddocumentsize: 0,
        totalsize: 0,
      },
      siteowner: {
        firstname: 'Marcel',
        lastname: 'Korporaal',
        email: 'marcel.korporaal@bettyblocks.com',
        userid: 1470,
      },
      isSyncable: 1,
      file: {
        permissionlevel: 'SITE_ONLY',
        approvaldocumentworkflow: null,
        allowbulkdownload: null,
        emailnotification: null,
        showsitemap: null,
        inbox: null,
        emailmetadata: null,
      },
      sitenametranslations: {
        translation: [
          {
            languagecode: 'en_GB',
            value: 'My site',
          },
        ],
      },
      enabledocumentredaction: true,
      mentiongroups: 0,
    },
  ],
};

const usersJson = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    address: {
      street: 'Victor Plains',
      suite: 'Suite 879',
      city: 'Wisokyburgh',
      zipcode: '90566-7771',
      geo: {
        lat: '-43.9509',
        lng: '-34.4618',
      },
    },
    phone: '010-692-6593 x09125',
    website: 'anastasia.net',
    company: {
      name: 'Deckow-Crist',
      catchPhrase: 'Proactive didactic contingency',
      bs: 'synergize scalable supply-chains',
    },
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    address: {
      street: 'Douglas Extension',
      suite: 'Suite 847',
      city: 'McKenziehaven',
      zipcode: '59590-4157',
      geo: {
        lat: '-68.6102',
        lng: '-47.0653',
      },
    },
    phone: '1-463-123-4447',
    website: 'ramiro.info',
    company: {
      name: 'Romaguera-Jacobson',
      catchPhrase: 'Face to face bifurcated interface',
      bs: 'e-enable strategic applications',
    },
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    address: {
      street: 'Hoeger Mall',
      suite: 'Apt. 692',
      city: 'South Elvis',
      zipcode: '53919-4257',
      geo: {
        lat: '29.4572',
        lng: '-164.2990',
      },
    },
    phone: '493-170-9623 x156',
    website: 'kale.biz',
    company: {
      name: 'Robel-Corkery',
      catchPhrase: 'Multi-tiered zero tolerance productivity',
      bs: 'transition cutting-edge web services',
    },
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    address: {
      street: 'Skiles Walks',
      suite: 'Suite 351',
      city: 'Roscoeview',
      zipcode: '33263',
      geo: {
        lat: '-31.8129',
        lng: '62.5342',
      },
    },
    phone: '(254)954-1289',
    website: 'demarco.info',
    company: {
      name: 'Keebler LLC',
      catchPhrase: 'User-centric fault-tolerant solution',
      bs: 'revolutionize end-to-end systems',
    },
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    address: {
      street: 'Norberto Crossing',
      suite: 'Apt. 950',
      city: 'South Christy',
      zipcode: '23505-1337',
      geo: {
        lat: '-71.4197',
        lng: '71.7478',
      },
    },
    phone: '1-477-935-8478 x6430',
    website: 'ola.org',
    company: {
      name: 'Considine-Lockman',
      catchPhrase: 'Synchronised bottom-line interface',
      bs: 'e-enable innovative applications',
    },
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    address: {
      street: 'Rex Trail',
      suite: 'Suite 280',
      city: 'Howemouth',
      zipcode: '58804-1099',
      geo: {
        lat: '24.8918',
        lng: '21.8984',
      },
    },
    phone: '210.067.6132',
    website: 'elvis.io',
    company: {
      name: 'Johns Group',
      catchPhrase: 'Configurable multimedia task-force',
      bs: 'generate enterprise e-tailers',
    },
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    address: {
      street: 'Ellsworth Summit',
      suite: 'Suite 729',
      city: 'Aliyaview',
      zipcode: '45169',
      geo: {
        lat: '-14.3990',
        lng: '-120.7677',
      },
    },
    phone: '586.493.6943 x140',
    website: 'jacynthe.com',
    company: {
      name: 'Abernathy Group',
      catchPhrase: 'Implemented secondary concept',
      bs: 'e-enable extensible e-tailers',
    },
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    address: {
      street: 'Dayna Park',
      suite: 'Suite 449',
      city: 'Bartholomebury',
      zipcode: '76495-3109',
      geo: {
        lat: '24.6463',
        lng: '-168.8889',
      },
    },
    phone: '(775)976-6794 x41206',
    website: 'conrad.com',
    company: {
      name: 'Yost and Sons',
      catchPhrase: 'Switchable contextually-based project',
      bs: 'aggregate real-time technologies',
    },
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    address: {
      street: 'Kattie Turnpike',
      suite: 'Suite 198',
      city: 'Lebsackbury',
      zipcode: '31428-2261',
      geo: {
        lat: '-38.2386',
        lng: '57.2232',
      },
    },
    phone: '024-648-3804',
    website: 'ambrose.net',
    company: {
      name: 'Hoeger LLC',
      catchPhrase: 'Centralized empowering task-force',
      bs: 'target end-to-end models',
    },
  },
];
