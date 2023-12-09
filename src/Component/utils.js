import moment from "moment"

export const analyze = (text) => {
    if (text.includes('hi') || text.includes('hai') || text.includes("hello"))
        return 'Hi, How can i help you?'
     else if (text.includes('goku'))
        return 'Im Chatbat create by Goku?'
        else if (text.includes('miss you'))
        return 'I miss you to?'
        else if (text.includes('I love you'))
        return 'I love you to dear?'
        else if (text.includes('Who are you'))
        return 'I am Goku?'
        else if (text.includes('i miss you'))
        return 'I miss you to?'
        else if (text.includes('i want one qustions'))
        return 'Tell me?'
        else if (text.includes('Baby'))
        return 'Tell me baby ?'
        else if (text.includes('Dsp'))
        return 'Dvi?'


    else if (text.includes('date'))
        return moment().format('MMMM Do YYYY')
    else if (text.includes("time"))
        return moment().format("h:mm:ss ")
    else if (text.includes('google'))
        return 'https://www.google.com'

    else if (text.includes('tnpsc'))
      return 'https://www.tnpsc.gov.in/'

      else if (text.includes('isro'))
      return 'https://www.isro.gov.in//'

      
      else if (text.includes('drdo'))
      return 'https://www.drdo.gov.in/'

      else if (text.includes('police'))
      return 'https://www.tnusrb.tn.gov.in/'

      else if (text.includes('salem'))
      return 'https://salem.nic.in/'

      else if (text.includes('Rrb'))
        return 'https://www.rrbbnc.gov.in/'

        else if (text.includes('Tn velaivaaippu'))
        return 'https://tnvelaivaaippu.gov.in/Empower/'

        else if (text.includes('Indian railway'))
        return 'https://indianrailways.gov.in/railwayboard/view_section.jsp?lang=0&id=0,5,373,2817'

        else if (text.includes('Eshram'))
        return 'https://eshram.gov.in/'

        else if (text.includes('My govt'))
        return 'https://www.mygov.in/work-at-mygov/'

        else if (text.includes('Govt job'))
        return 'https://www.govtjobsportal.in/'

        else if (text.includes('Ncs'))
        return 'https://www.ncs.gov.in/'

        else if (text.includes('Hdhm'))
        return 'https://hpr.ndhm.gov.in/en/users/login'

        else if (text.includes('My aadhaar'))
        return 'https://myaadhaar.uidai.gov.in/'


        else if (text.includes('Uidai'))
        return 'https://eaadhaar.uidai.gov.in/genricDownloadAadhaar'

        else if (text.includes('Upsc'))
        return'https://upsc.gov.in/'

        else if( text.includes('Tn book'))
        return'https://www.tntextbooks.co.in/?m=1'

        else if( text.includes('Army'))
        return'https://www.joinindianarmy.nic.in/Authentication.aspx'

        else if( text.includes('Tn book old'))
        return'https://www.tnpscjob.com/new-samacheer-kalvi-9th-books/'

        else if( text.includes('Tnpds'))
        return'https://tnpds.gov.in/'





    else if (text.includes("thank you"))

        return 'Thanks for Contacting me. Have a nice Day'
    return "I can't get you. Can you rephrase the message?"


}


