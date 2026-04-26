export type Lang = "ar" | "en";

export const content = {
  brand: {
    en: { name: "Elfakharany Law Firm", short: "" },
    ar: { name: "مكتب الفخراني للمحاماة والاستشارات القانونية", short: "الفخراني" },
  },
  nav: {
    en: { home: "Home", about: "About", practice: "Practice Areas", contact: "Contact" },
    ar: { home: "الرئيسية", about: "عن المكتب", practice: "مجالات العمل", contact: "تواصل معنا" }
  },
  hero: {
    en: {
      eyebrow: "Established 1984",
      title: "Elfakharany Law Firm",
      subtitle:
        "",
      ctaPrimary: "Contact Us",
      ctaSecondary: "Our Practice Areas",
      stat1: "40+", stat1Label: "Years of Experience",
      stat2: "6", stat2Label: "Practice Areas",
      stat3: "Cairo", stat3Label: "& Across Egypt",
    },
    ar: {
      eyebrow: "تأسس 1984",
      title: "مكتب الفخراني للمحاماة و الاستشارات القانونية",
      subtitle:
        "",
      ctaPrimary: "تواصل معنا",
      ctaSecondary: "مجالات عملنا",
      stat1: "+40", stat1Label: "عامًا من الخبرة",
      stat2: "6", stat2Label: "مجالات قانونية",
      stat3: "القاهرة", stat3Label: "وجميع أنحاء مصر",
    },
  },
  intro: {
    en: {
      eyebrow: "About the Firm",
      title: "A standard of legal excellence in Egypt",
      body:
        "Elfakharany Law Firm was established in Cairo and has grown into a distinguished legal practice serving individuals and businesses across Egypt."
,
    },
    ar: {
      eyebrow: "عن المكتب",
      title: "معيار للتميز القانوني في مصر",
      body:
        "تأسس مكتب الفخراني للمحاماة في القاهرة، وتطوّر ليصبح مكتبًا قانونيًا مرموقًا يقدم المشورة للأفراد والشركات في أنحاء مصر",
    },
  },
  practice: {
    en: {
      eyebrow: "Practice Areas",
      title: "Comprehensive legal services in Cairo & across Egypt",
      subtitle:
        "We deliver strategic legal solutions across the key areas of Egyptian law, guided by expertise, precision, and client focus.",
    },
    ar: {
      eyebrow: "مجالات العمل",
      title: "خدمات قانونية متكاملة في القاهرة وجميع أنحاء مصر",
      subtitle: "نقدّم استشارات قانونية في مجالات القانون المصري، مدفوعة بالخبرة والاحترافية والالتزام"
    },
    areas: [
      {
        slug: "corporate",
        en: {
          title: "Corporate & Business Law",
          short: "Strategic counsel for companies operating in Egypt.",
          intro: "We advise founders, executives, and boards on the full lifecycle of a business in Egypt — from incorporation and shareholder agreements to mergers, acquisitions, and ongoing corporate governance.",
          problems: "Complex shareholder disputes, regulatory uncertainty, contract risk, and growth-stage transactions handled with commercial precision.",
          trust: "Decades advising local enterprises and foreign investors entering the Egyptian market.",
        },
        ar: {
          title: "قانون الشركات والأعمال",
          short: "استشارات استراتيجية للشركات العاملة في مصر.",
          intro: "نقدّم المشورة للمؤسّسين والتنفيذيين ومجالس الإدارات في جميع مراحل حياة الشركة في مصر، بدءًا من التأسيس واتفاقيات الشركاء وحتى عمليات الاندماج والاستحواذ والحوكمة المستمرة.",
          problems: "نزاعات الشركاء المعقّدة، الغموض التنظيمي، مخاطر العقود، وصفقات النموّ — كل ذلك يُدار بدقة تجارية.",
    
        },
      },
      {
        slug: "litigation",
        en: {
          title: "Dispute Resolution",
          short: "Providing strategic counsel and representation in arbitration and litigation.",
          intro: "Whether as claimant or defendant, our firm represents clients in litigation and arbitration proceedings, handling disputes before courts of all levels and arbitral tribunals across Egypt.",
          problems: "Contract disputes, debt recovery, commercial conflicts, and complex claims resolved through strategic litigation and arbitration with precision and discipline.",
        },
        ar: {
          title: "تسوية المنازعات",
          short: "تقديم استشارات وتمثيل قانوني في التحكيم والتقاضي.",
          intro: "سواء بصفة مدعي أو مدعى عليه، تمثل شركتنا عملاءها في إجراءات التقاضي والتحكيم، حيث نتولى إدارة النزاعات أمام مختلف درجات المحاكم وهيئات التحكيم في جميع أنحاء مصر.",
          problems: "تتم إدارة النزاعات والمطالبات المعقدة من خلال استراتيجيات تقاضي وتحكيم منضبطة، مصممة لحماية مراكزكم القانونية.",
         
        },
      },
      {
        slug: "family",
        en: {
          title: "Labor Law",
          short: "Providing strategic counsel on employment matters.",
          intro: "We advise and represent employers and employees across a full spectrum of employment matters, including contracts, workplace policies, terminations, disputes, and compliance with Egyptian labor law.",
          problems: "Workplace disputes, wrongful termination claims, and regulatory challenges resolved with precision, discretion, and a clear focus on protecting your rights and interests.",
      
        },
        ar: {
          title: "قانون العمل",
          short: "معالجة متحفّظة ومبدئية للقضايا الشخصية.",
          intro: "نقدّم المشورة ونمثل أصحاب العمل والموظفين في مختلف مسائل قانون العمل، بما في ذلك العقود، وسياسات العمل، وإنهاء الخدمة، والنزاعات، والامتثال لأحكام قانون العمل المصري.",
          problems: "يتم التعامل مع نزاعات بيئة العمل، ودعاوى الفصل التعسفي، والتحديات التنظيمية بدقة وسرية، مع تركيز واضح على حماية حقوقكم ومصالحكم.",
         
        },
      },
      {
        slug: "real-estate",
        en: {
          title: "Real Estate Law",
          short: "Property transactions secured against risk.",
          intro: "From residential purchases to large-scale developments, we handle title verification, contracts, registration, leases, and property disputes throughout Cairo and Egypt.",
          problems: "Disputed ownership, registration delays, off-plan risk, and landlord-tenant conflicts — resolved decisively.",
         
        },
        ar: {
          title: "قانون العقارات",
          short: "صفقات عقارية مؤمّنة ضد المخاطر.",
          intro: "من الشراء السكني إلى المشروعات التطويرية الكبرى، نتولّى التحقّق من الملكية، والعقود، والتسجيل، والإيجارات، والنزاعات العقارية في القاهرة وجميع أنحاء مصر.",
          problems: "نزاعات الملكية، تأخّر التسجيل، مخاطر البيع على الخارطة، ونزاعات المالك والمستأجر — تُحلّ بحسم.",
          
        },
      },
      {
        slug: "immigration",
        en: {
          title: "Immigration Law",
          short: "Residency, visas & nationality matters in Egypt.",
          intro: "We assist individuals and families with residency permits, work authorizations, citizenship applications, and immigration appeals in Egypt.",
          problems: "Visa refusals, residency renewals, investor citizenship pathways, and complex status questions resolved efficiently.",
         
        },
        ar: {
          title: "قانون الهجرة والإقامة",
          short: "الإقامة والتأشيرات والجنسية في مصر.",
          intro: "نساعد الأفراد والعائلات في الحصول على تصاريح الإقامة، وتصاريح العمل، وطلبات الجنسية، والطعون المتعلقة بالهجرة في مصر.",
          problems: "رفض التأشيرات، تجديد الإقامات، مسارات جنسية المستثمر، والمسائل المعقّدة تُحسم بكفاءة.",
        
        },
      },
      {
        slug: "contracts",
        en: {
          title: "Tax Law",
          short: "Providing strategic tax advice to ensure compliance and optimize financial outcomes.",
          intro: "We advise clients on a wide range of tax matters, including corporate taxation, compliance, structuring, and disputes with tax authorities under Egyptian law.",
          problems: "Complex tax obligations, audits, and disputes managed with precision, ensuring compliance while protecting your financial position.",
         
        },
        ar: {
          title: "قانون الضرائب",
          short: "تقديم استشارات ضريبية  لضمان الامتثال وتعظيم النتائج المالية",
          intro: "نقدّم المشورة للعملاء في نطاق واسع من المسائل الضريبية، بما في ذلك ضرائب الشركات، والامتثال، والهيكلة الضريبية، وتسوية المنازعات مع السلطات الضريبية وفقًا للقانون المصري.",
          problems: "تُدار الالتزامات الضريبية المعقدة، وعمليات الفحص، والمنازعات بدقة، بما يضمن الامتثال مع حماية مراكزكم المالية.",
        
        },
      },
    ],
  },
  why: {
    en: {
      eyebrow: "OUR DISTINCTION",
      title: "Experience that protects, judgment that delivers",
      items: [
        { t: "40+ Years of Experience", d: "Four decades of legal practice across Egyptian courts and corporate matters, delivering insight shaped by experience not theory." },
        { t: "Deep Legal Expertise", d: "Comprehensive legal knowledge applied with precision, dedicated to the protection of client interests at every stage." },
        { t: "Client-Focused Approach", d: "Direct access to senior counsel. No outsourcing, no surprises just strategic, honest advocacy." }
      ],
    },
    ar: {
      eyebrow: "لماذا يختارنا العملاء",
      title: "خبرة تحمي، وحكمة تُحقّق النتائج",
      items: [
        { t: "أكثر من 40 عامًا من الخبرة", d: "أكثر من أربعون عامًا من الخبرة القانونية أمام المحاكم المصرية وفي الشؤون المؤسسية، نقدم خلالها رؤى قانونية مستندة إلى الخبرة العملية لا إلى الطرح النظري." },
        { t: "خبرة قانونية", d: "خبرة قانونية شاملة تُمارس بدقة، وموجّهة نحو حماية مصالح العملاء في كافة مراحل العمل القانوني." },
        { t: "نهج يضع العميل أولًا", d: "تواصل مباشر مع محامٍ كبير. لا تفويض، ولا مفاجآت مشورة استراتيجية وصادقة فقط." },

      ],
    },
  },
  faq: {
    en: {
      eyebrow: "Frequently Asked Questions",
      items: [
        { q: "Where is Elfakharany Law Firm located?", a: "Our office are located at 38 Aly Amin Street, off Mostafa El Nahhas Street, 7th District, Nasr City, Cairo, Egypt." },
        { q: "How can I book a legal consultation?", a: "You can request a consultation through our contact form, by email, or by phone. We respond to most enquiries within one to three business day." },
        { q: "How long has the firm been practicing law?", a: "It was Founded by Gamal Elfakharany, the firm draws on more than 40 years of legal practice in Egypt." },
        { q: "Do you handle cases outside Cairo?", a: "Yes. While headquartered in Cairo, we represent clients in courts and authorities across Egypt." },
      ],
    },
    ar: {
      eyebrow: "الأسئلة الشائعة",
      items: [
        { q: "أين يقع مكتب الفخراني للمحاماة؟", a: "يقع مكاتبنا في 38 شارع علي أمين، المتفرع من شارع مصطفى النحاس، الحي السابع، مدينة نصر، القاهرة، مصر، ونقدّم خدماتنا القانونية لعملائنا في مختلف أنحاء الجمهورية." },
        { q: "كيف يمكنني حجز استشارة قانونية؟", a: "يمكنك طلب استشارة عبر نموذج التواصل أو البريد الإلكتروني أو الهاتف. نردّ على معظم الاستفسارات خلال يوم عمل واحد الي ثلاث ايام." },
        { q: "منذ متى يمارس المكتب المحاماة؟", a: "أُسّس المكتب على يد المستشار جمال الفخراني، ويستند إلى أكثر من 40 عامًا من الممارسة القانونية في مصر." },
        { q: "هل تتولّون قضايا خارج القاهرة؟", a: "نعم. على الرغم من أن مقرّنا في القاهرة، إلا أننا نمثّل العملاء أمام المحاكم والجهات في جميع أنحاء مصر." },
      ],
    },
  },
  about: {
    en: {
      eyebrow: "About the Firm",
      title: "Four decades of advocacy. One unwavering standard.",
      lead: "Elfakharany Law Firm was founded on a simple conviction: that exceptional legal counsel changes lives and businesses. From our office in Cairo, we have spent more than forty years standing beside our clients in their most consequential moments.",
      story: [
  "Gamal Elfakharany is the founder of Elfakharany Law Firm and a distinguished Egyptian lawyer with a career spanning more than four decades, during which he has earned a reputation as a trusted legal advisor across a wide spectrum of complex matters. His practice reflects a deep understanding of the Egyptian legal system, supported by extensive experience in navigating evolving regulatory and business environments. He is also recognized for his strong professional relationships within the legal and business community in Egypt, further enhancing his ability to effectively represent and advise his clients.",

  "With a strong foundation in Corporate Law, he has advised on a wide range of transactions, including company formations, restructurings, strategic investments, and major transactions in Egypt. His work has consistently focused on structuring efficient legal frameworks that support business growth while ensuring full compliance with applicable laws and regulations.",

  "Throughout his career, he has been involved in significant legal matters requiring a high degree of professionalism, discretion, and sound judgment. He has also served as legal counsel in matters relating to professional syndicates in Egypt, including advising multiple former Egyptian Engineers Syndicates and other professional bodies, reflecting the trust placed in his expertise in sensitive legal and institutional matters.",

  "He is widely regarded as a respected and influential figure in the legal field, known for his meticulous approach, strategic thinking, and unwavering commitment to his clients’ interests. By combining legal precision with practical insight, he continues to deliver tailored solutions that address both immediate challenges and long-term objectives, reinforcing enduring relationships built on trust and results."
],      lawyer: {
        name: "Gamal Elfakharany",
        role: "Founding Attorney",
        bio: "Mr. Gamal Elfakharany offers comprehensive legal counsel, distinguished by precision, practicality, and a strong commitment to client interests.",
      },
      values: [
        { t: "Email", d: "gamalelfakharany@elfakharanylaw.com" },
        { t: "Tel", d: "+201000200363" },
      ],
    },
    ar: {
      eyebrow: "عن المكتب",
      title: "اربعون عامًا تميز قانوني مستمر",
      lead: "تأسّس مكتب الفخراني للمحاماة على قناعة واضحة: أن الاستشارة القانونية الاستثنائية تُغيّر حياة الأفراد ومسار الشركات. من مقرّنا في القاهرة، أمضينا أكثر من اربعون عامًا إلى جانب عملائنا في أهمّ لحظات حياتهم.",
      story: [
  "جمال الفخراني هو المؤسس لمكتب الفخراني للمحاماة، ويُعد من أبرز المحامين في مصر، حيث تمتد مسيرته المهنية لأكثر من أربعون عامًا، اكتسب خلالها سمعة راسخة كمستشار قانوني موثوق فيما يتخذ من إجراءات واسعة في القضايا المعقدة. وتعكس ممارسته فهماً عميقاً للنظام القانوني المصري، مدعوماً بخبرة واسعة في التعامل مع البيئات التنظيمية والتجارية المتغيرة. كما يُعرف بعلاقاته المهنية الواسعة داخل الأوساط القانونية وقطاع الأعمال في مصر، بما يعزز قدرته على تمثيل عملائه وتقديم المشورة لهم بكفاءة عالية.",

  "وبفضل أساس قوي في قانون الشركات، قدّم المشورة في نطاق واسع من المعاملات، بما في ذلك تأسيس الشركات، وإعادة الهيكلة، والاستثمارات الاستراتيجية، إضافة إلى المشاركة في عدد من المعاملات الكبرى في مصر. وقد ارتكز عمله باستمرار على تصميم أطر قانونية فعّالة تدعم نمو الأعمال، مع ضمان الامتثال الكامل للقوانين واللوائح المعمول بها.",

  "وعلى مدار مسيرته المهنية، شارك في عدد من المسائل القانونية الهامة التي تتطلب أعلى درجات الاحترافية والسرية وحسن التقدير. كما تولّى تقديم الاستشارات القانونية في ما يتعلق بالنقابات المهنية في مصر، بما في ذلك تقديم المشورة لعدد من النقابات مثل نقابة المهندسين وغيرها من الهيئات المهنية، وهو ما يعكس الثقة الكبيرة في خبرته في القضايا القانونية والمؤسسية الحساسة.",

  "ويُعد من الشخصيات القانونية المرموقة والمؤثرة، حيث يتميّز بنهجه الدقيق وتفكيره الاستراتيجي والتزامه الراسخ بحماية مصالح عملائه. ومن خلال الجمع بين الدقة القانونية والرؤية العملية، يواصل تقديم حلول قانونية مصممة بعناية، تُعالج التحديات الآنية وتدعم الأهداف طويلة الأمد، بما يعزز علاقات مستدامة قائمة على الثقة والنتائج."
],
      lawyer: {
        name: "المستشار / جمال الفخراني",
        role: "المحامي المؤسّس",
        bio: "يقدّم المستشار جمال الفخراني استشارات قانونية شاملة، تتميّز بالدقة والعملية والالتزام الراسخ بمصالح عملائه",
      },
      values: [
        { t: "البريد الإلكتروني", d: "gamalelfakharany@elfakharanylaw.com" },
        { t: "رقم الهاتف", d: "+201000200363" },
      ],
    },
  },
  contact: {
    en: {
      eyebrow: "Contact",
      title: "Speak with our legal team in Cairo",
      lead: "Tell us briefly about your matter. We respond to every enquiry personally — most within one business day.",
      name: "Full name", email: "Email address", phone: "Phone (optional)", subject: "Subject", message: "How can we help?",
      submit: "Send Enquiry", sent: "Thank you. We will be in touch shortly.",
      info: "Office Information",
      addressLabel: "Office", addressValue: "38 Aly Amin Street, Off Mostafa El Nahhas St, 7th District, Nasr City, Cairo, Egypt",
      phoneLabel: "Phone", phoneValue: "+201000200363 ",
      emailLabel: "Email", emailValue: "info@elfakharanylaw.com",
      hoursLabel: "Hours", hoursValue: "Saturday – Wednesday · 09:00 – 17:00",
    },
    ar: {
      eyebrow: "تواصل معنا",
      title: "تحدّث مع فريقنا القانوني في القاهرة",
      lead: "أخبرنا بإيجاز عن قضيتك. نردّ على كل استفسار شخصيًا — معظمها خلال يوم عمل واحد.",
      name: "الاسم بالكامل", email: "البريد الإلكتروني", phone: "رقم الهاتف (اختياري)", subject: "الموضوع", message: "كيف يمكننا مساعدتك؟",
      submit: "إرسال الاستفسار", sent: "شكرًا لتواصلك. سنردّ عليك في أقرب وقت.",
      info: "بيانات المكتب",
      addressLabel: "العنوان", addressValue: "٣٨ شارع علي امين متفرع من شارع مصطفي النحاس , حي السابع , مدينة نصر , القاهرة ",
      phoneLabel: "الهاتف", phoneValue: "+201000200363",
      emailLabel: "البريد الإلكتروني", emailValue: "info@elfakharanylaw.com",
      hoursLabel: "ساعات العمل", hoursValue: "السبت – الاربعاء · 09:00 – 17:00",
    },
  },
  cta: {
    en: { title: "For Inquiries", subtitle: "Please contact Elfakharany Law Firm and Legal Consultancy.", btn: "Contact Us Today" },
    ar: { title: "استفسارات", subtitle: "للتواصل مع مكتب الفخراني للمحاماة و الاستشارات القانونية.", btn: "تواصل معنا اليوم" },
  },
  footer: {
    en: {
      tagline: "",
      rights: "All rights reserved.",
      sections: { firm: "Firm", practice: "Practice", contact: "Contact" },
    },
    ar: {
      tagline: "",
      rights: "",
      sections: { firm: "المكتب", practice: "مجالات العمل", contact: "تواصل" },
    },
  },
} as const;
