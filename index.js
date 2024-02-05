const englishDuration = total=> {  
    const give = (val,unit)=> val===0? '': val===1? '1 '+unit: val+' '+unit+'s'  
    let fullMin = total=> Math.floor(total/60), fullHours = total=> Math.floor(fullMin(total)/60), fullDays = total=> Math.floor(fullHours(total)/24), fullYears = total=> Math.floor(fullDays(total)/365)
    let secs = total=> total%60, mins = total=> fullMin(total)< 60? fullMin(total): secs(fullMin(total)), hours = total=> fullHours(total)< 24? fullHours(total): fullHours(total)%24, days = total=> fullDays(total)< 365? fullDays(total): fullDays(total)%365, years = total=> fullYears(total)
    let parts = [years(total),days(total),hours(total),mins(total),secs(total)].filter(el=>el!==0)
    let sepY, sepD, sepH = hours(total) && mins(total) && secs(total)? ', ': parts.length>=2 && hours(total) && mins(total) && !secs(total)? ' and ' : '', sepM = parts.length>1 && secs(total)? ' and ': ''
    days(total) && (hours(total) || mins(total)) && parts.length > 2? sepD = ', ': parts.length === 2 && days(total) && (hours(total) || mins(total))? sepD = ' and ': sepD = ''
    years(total) && (days(total) || hours(total) || mins(total)) && parts.length>2? sepY = ', ': years(total) && (days(total) || hours(total) || mins(total)) && parts.length===2? sepY = ' and ' : sepY = ''
    return total===0? 'now': `${give(years(total),'year')}${sepY}${give(days(total),'day')}${sepD}${give(hours(total),'hour')}${sepH}${give(mins(total),'minute')}${sepM}${give(secs(total),'second')}`
  }

  module.exports = englishDuration