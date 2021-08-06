import { objectType } from 'nexus'

export const Contact = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Contact',
  definition(t) {
    t.string('id')
    t.nullable.string('accountId')
    t.nullable.string('affiliations')
    t.nullable.int('age')
    t.nullable.string('ageAsText')
    t.nullable.int('annualIncome')
    t.nullable.string('assistantName')
    t.nullable.string('assistantPhone')
    t.nullable.string('billingAddress')
    t.nullable.field('birthDate', { type: 'DateTime' })
    t.nullable.string('citizenship')
    t.nullable.field('communicationPreferences', {
      type: 'CommunicationPreferences',
      resolve(root: any) {
        return root.communicationPreferences
      },
    })
    t.nullable.string('communicationPreferencesId')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('contactPreference', {
      type: 'ContactPreference',
      resolve(root: any) {
        return root.contactPreference
      },
    })
    t.nullable.string('contactPreferenceId')
    t.nullable.field('contactRecordType', {
      type: 'ContactRecordType',
      resolve(root: any) {
        return root.contactRecordType
      },
    })
    t.nullable.string('contactRecordTypeId')
    t.nullable.field('countryOfResidence', {
      type: 'Country',
      resolve(root: any) {
        return root.countryOfResidence
      },
    })
    t.nullable.string('countryOfResidenceId')
    t.nullable.field('countryOfBirth', {
      type: 'Country',
      resolve(root: any) {
        return root.countryOfBirth
      },
    })
    t.nullable.string('countryOfBirthId')
    t.nullable.field('createdBy', {
      type: 'User',
      resolve(root: any) {
        return root.createdBy
      },
    })
    t.nullable.string('createdById')
    t.nullable.field('createdAt', { type: 'DateTime' })
    t.nullable.field('updatedAt', { type: 'DateTime' })
    t.nullable.field('createdFromLead', {
      type: 'LeadSource',
      resolve(root: any) {
        return root.createdFromLead
      },
    })
    t.nullable.string('createdFromLeadId')
    t.nullable.string('currentEmployer')
    t.nullable.field('customerTimeZone', {
      type: 'TimeZone',
      resolve(root: any) {
        return root.customerTimeZone
      },
    })
    t.nullable.string('customerTimeZoneId')
    t.nullable.string('department')
    t.nullable.string('description')
    t.nullable.boolean('doNotCall')
    t.nullable.string('email')
    t.nullable.boolean('hasOptedOutOfEmail')
    t.nullable.boolean('emailVerified')
    t.nullable.field('employedSince', { type: 'DateTime' })
    t.nullable.string('facebook')
    t.nullable.string('fax')
    t.nullable.boolean('hasOptedOutOfFax')
    t.nullable.boolean('faxVerified')
    t.nullable.field('gender', {
      type: 'Gender',
      resolve(root: any) {
        return root.gender
      },
    })
    t.nullable.string('genderId')
    t.nullable.field('homeOwnership', {
      type: 'HomeOwnership',
      resolve(root: any) {
        return root.homeOwnership
      },
    })
    t.nullable.string('homeOwnershipId')
    t.nullable.string('homePhone')
    t.nullable.boolean('homePhoneVerified')
    t.nullable.field('individual', {
      type: 'Individual',
      resolve(root: any) {
        return root.individual
      },
    })
    t.nullable.string('individualId')
    t.nullable.field('individualType', {
      type: 'IndividualType',
      resolve(root: any) {
        return root.individualType
      },
    })
    t.nullable.string('individualTypeId')
    t.nullable.field('languagesSpoken', {
      type: 'Language',
      resolve(root: any) {
        return root.languagesSpoken
      },
    })
    t.nullable.string('languagesSpokenId')
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('lastCURequestDate', { type: 'DateTime' })
    t.nullable.field('lastCUUpdateDate', { type: 'DateTime' })
    t.nullable.field('leadSource', {
      type: 'LeadSource',
      resolve(root: any) {
        return root.leadSource
      },
    })
    t.nullable.string('leadSourceId')
    t.nullable.string('linkedin')
    t.nullable.string('mailingAddress')
    t.nullable.boolean('mailingAddressVerified')
    t.nullable.field('maritalStatus', {
      type: 'MaritalStatus',
      resolve(root: any) {
        return root.maritalStatus
      },
    })
    t.nullable.string('maritalStatusId')
    t.nullable.boolean('marketingOptOut')
    t.nullable.string('mobilePhone')
    t.nullable.boolean('mobileVerified')
    t.nullable.field('mostUsedChannel', {
      type: 'ChannelInterface',
      resolve(root: any) {
        return root.mostUsedChannel
      },
    })
    t.nullable.string('mostUsedChannelId')
    t.nullable.string('motherMaidenName')
    t.nullable.string('name')
    t.nullable.field('nextLifeEvent', {
      type: 'LifeEvent',
      resolve(root: any) {
        return root.nextLifeEvent
      },
    })
    t.nullable.string('nextLifeEventId')
    t.nullable.int('numberOfChildren')
    t.nullable.int('numberOfDependents')
    t.nullable.string('occupation')
    t.nullable.string('otherAddress')
    t.nullable.boolean('otherAddressVerified')
    t.nullable.string('otherPhone')
    t.nullable.string('phone')
    t.nullable.string('preferredName')
    t.nullable.boolean('primaryAddressIsBilling')
    t.nullable.boolean('primaryAddressIsMailing')
    t.nullable.boolean('primaryAddressIsOther')
    t.nullable.boolean('primaryAddressIsShipping')
    t.nullable.string('primaryCitizenship')
    t.nullable.string('primaryLanguage')
    t.nullable.string('referredByContact')
    t.nullable.string('referredByUser')
    t.nullable.field('reportsTo', {
      type: 'User',
      resolve(root: any) {
        return root.reportsTo
      },
    })
    t.nullable.string('reportsToId')
    t.nullable.string('secondaryCitizenship')
    t.nullable.string('secondaryLanguage')
    t.nullable.string('shippingAddress')
    t.nullable.string('sourceSystemId')
    t.nullable.string('lastFourDigitSSN')
    t.nullable.field('taxBracket', {
      type: 'TaxBracket',
      resolve(root: any) {
        return root.taxBracket
      },
    })
    t.nullable.string('taxBracketId')
    t.nullable.string('taxId')
    t.nullable.string('title')
    t.nullable.string('twitter')
    t.nullable.field('weddingAnniversary', { type: 'DateTime' })
    t.list.field('CampaignMemberContact', {
      type: 'CampaignMember',
      args: {
        where: 'CampaignMemberWhereInput',
        orderBy: 'CampaignMemberOrderByInput',
        cursor: 'CampaignMemberWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CampaignMemberScalarFieldEnum',
      },
      resolve(root: any) {
        return root.CampaignMemberContact
      },
    })
    t.list.field('OpportunityReferredByContact', {
      type: 'Opportunity',
      args: {
        where: 'OpportunityWhereInput',
        orderBy: 'OpportunityOrderByInput',
        cursor: 'OpportunityWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OpportunityScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OpportunityReferredByContact
      },
    })
    t.list.field('AssetContact', {
      type: 'Asset',
      args: {
        where: 'AssetWhereInput',
        orderBy: 'AssetOrderByInput',
        cursor: 'AssetWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetContact
      },
    })
    t.list.field('AccountPrimaryContact', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountPrimaryContact
      },
    })
    t.list.field('AccountReferredByContact', {
      type: 'Account',
      args: {
        where: 'AccountWhereInput',
        orderBy: 'AccountOrderByInput',
        cursor: 'AccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AccountReferredByContact
      },
    })
    t.list.field('UserContact', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum',
      },
      resolve(root: any) {
        return root.UserContact
      },
    })
    t.nullable.field('_count', {
      type: 'ContactCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
