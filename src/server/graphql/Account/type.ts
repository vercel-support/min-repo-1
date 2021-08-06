import { objectType } from 'nexus'

export const Account = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Account',
  definition(t) {
    t.string('id')
    t.string('providerType')
    t.string('providerId')
    t.string('providerAccountId')
    t.nullable.string('refreshToken')
    t.nullable.string('accessToken')
    t.nullable.field('accessTokenExpires', { type: 'DateTime' })
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.field('user', {
      type: 'User',
      resolve(root: any) {
        return root.user
      },
    })
    t.string('userId')
    t.nullable.string('accountNumber')
    t.nullable.field('owner', {
      type: 'User',
      resolve(root: any) {
        return root.owner
      },
    })
    t.nullable.string('ownerId')
    t.nullable.field('accountRecordType', {
      type: 'AccountRecordType',
      resolve(root: any) {
        return root.accountRecordType
      },
    })
    t.nullable.string('accountRecordTypeId')
    t.nullable.string('site')
    t.nullable.field('accountSource', {
      type: 'LeadSource',
      resolve(root: any) {
        return root.accountSource
      },
    })
    t.nullable.string('accountSourceId')
    t.nullable.string('affiliations')
    t.nullable.int('age')
    t.nullable.string('ageAsText')
    t.nullable.int('annualIncome')
    t.nullable.int('annualRevenue')
    t.nullable.string('personAssistantName')
    t.nullable.string('personAssistantPhone')
    t.nullable.int('aum')
    t.nullable.string('bankNumber')
    t.nullable.string('billingAddress')
    t.nullable.field('personBirthdate', { type: 'DateTime' })
    t.nullable.string('borrowingHistory')
    t.nullable.string('borrowingPriorities')
    t.nullable.field('branchCode', {
      type: 'BranchCode',
      resolve(root: any) {
        return root.branchCode
      },
    })
    t.nullable.string('branchCodeId')
    t.nullable.string('branchName')
    t.nullable.field('clientCategory', {
      type: 'ClientCategory',
      resolve(root: any) {
        return root.clientCategory
      },
    })
    t.nullable.string('clientCategoryId')
    t.nullable.string('citizenship')
    t.nullable.string('claimsOnHouseholdPolicies')
    t.nullable.field('communicationPreferences', {
      type: 'CommunicationPreferences',
      resolve(root: any) {
        return root.communicationPreferences
      },
    })
    t.nullable.string('communicationPreferencesId')
    t.nullable.field('contactPreference', {
      type: 'ContactPreference',
      resolve(root: any) {
        return root.contactPreference
      },
    })
    t.nullable.string('contactPreferenceId')
    t.nullable.field('conversionDateTime', { type: 'DateTime' })
    t.nullable.string('countryOfResidence')
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
    t.nullable.boolean('createdFromLead')
    t.nullable.field('creditRating', {
      type: 'CreditRating',
      resolve(root: any) {
        return root.creditRating
      },
    })
    t.nullable.string('creditRatingId')
    t.nullable.int('creditScore')
    t.nullable.string('currentEmployer')
    t.nullable.field('customerTimeZone', {
      type: 'TimeZone',
      resolve(root: any) {
        return root.customerTimeZone
      },
    })
    t.nullable.string('customerTimeZoneId')
    t.nullable.string('personDepartment')
    t.nullable.string('description')
    t.nullable.boolean('personDoNotCall')
    t.nullable.string('personEmail')
    t.nullable.boolean('personHasOptedOutOfEmail')
    t.nullable.boolean('emailVerified')
    t.nullable.field('employedSince', { type: 'DateTime' })
    t.nullable.int('numberOfEmployees')
    t.nullable.field('referredByContact', {
      type: 'Contact',
      resolve(root: any) {
        return root.referredByContact
      },
    })
    t.nullable.string('referredByContactId')
    t.nullable.string('facebook')
    t.nullable.string('fax')
    t.nullable.boolean('personHasOptedOutOfFax')
    t.nullable.boolean('faxVerified')
    t.nullable.field('financialInterests', {
      type: 'FinancialInterests',
      resolve(root: any) {
        return root.financialInterests
      },
    })
    t.nullable.string('financialInterestsId')
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
    t.nullable.string('personHomePhone')
    t.nullable.boolean('homePhoneVerified')
    t.nullable.string('householdPolicies')
    t.nullable.string('notes')
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
    t.nullable.field('industry', {
      type: 'Industry',
      resolve(root: any) {
        return root.industry
      },
    })
    t.nullable.string('industryId')
    t.nullable.field('insuranceCustomerSince', { type: 'DateTime' })
    t.nullable.field('investmentExperience', {
      type: 'InvestmentExperience',
      resolve(root: any) {
        return root.investmentExperience
      },
    })
    t.nullable.string('investmentExperienceId')
    t.nullable.field('investmentObjectives', {
      type: 'InvestmentObjectives',
      resolve(root: any) {
        return root.investmentObjectives
      },
    })
    t.nullable.string('investmentObjectivesId')
    t.nullable.field('kycDate', { type: 'DateTime' })
    t.nullable.field('kycStatus', {
      type: 'KycStatus',
      resolve(root: any) {
        return root.kycStatus
      },
    })
    t.nullable.string('kycStatusId')
    t.nullable.string('languagesSpoken')
    t.nullable.field('lastInteraction', { type: 'DateTime' })
    t.nullable.field('lastModifiedBy', {
      type: 'User',
      resolve(root: any) {
        return root.lastModifiedBy
      },
    })
    t.nullable.string('lastModifiedById')
    t.nullable.field('lastReview', { type: 'DateTime' })
    t.nullable.field('personLastCURequestDate', { type: 'DateTime' })
    t.nullable.field('personLastCUUpdateDate', { type: 'DateTime' })
    t.nullable.field('lastTransactionDate', { type: 'DateTime' })
    t.nullable.field('lastTransactionDateJointOwner', { type: 'DateTime' })
    t.nullable.field('lastTransactionDatePrimaryOwner', { type: 'DateTime' })
    t.nullable.field('lastUsedChannel', {
      type: 'ChannelInterface',
      resolve(root: any) {
        return root.lastUsedChannel
      },
    })
    t.nullable.string('lastUsedChannelId')
    t.nullable.int('lifetimeValue')
    t.nullable.string('linkedin')
    t.nullable.string('mailingAddress')
    t.nullable.string('personMailingAddress')
    t.nullable.field('maritalStatus', {
      type: 'MaritalStatus',
      resolve(root: any) {
        return root.maritalStatus
      },
    })
    t.nullable.string('maritalStatusId')
    t.nullable.boolean('marketingOptOut')
    t.nullable.string('personMobilePhone')
    t.nullable.boolean('mobileVerified')
    t.nullable.field('mostUsedChannel', {
      type: 'ChannelInterface',
      resolve(root: any) {
        return root.mostUsedChannel
      },
    })
    t.nullable.string('mostUsedChannelId')
    t.nullable.string('motherMaidenName')
    t.nullable.int('netWorth')
    t.nullable.field('nextInteraction', { type: 'DateTime' })
    t.nullable.field('nextLifeEvent', {
      type: 'LifeEvent',
      resolve(root: any) {
        return root.nextLifeEvent
      },
    })
    t.nullable.string('nextLifeEventId')
    t.nullable.string('nextReview')
    t.nullable.int('numberOfChildren')
    t.nullable.int('numberOfDependents')
    t.nullable.int('totalNumberOfFinAccountsJointOwner')
    t.nullable.int('totalNumberOfFinAccountsPrimaryOwner')
    t.nullable.string('occupation')
    t.nullable.field('operatingHours', {
      type: 'OperatingHours',
      resolve(root: any) {
        return root.operatingHours
      },
    })
    t.nullable.string('operatingHoursId')
    t.nullable.string('otherAddress')
    t.nullable.string('personOtherAddress')
    t.nullable.string('personOtherPhone')
    t.nullable.field('ownership', {
      type: 'Ownership',
      resolve(root: any) {
        return root.ownership
      },
    })
    t.nullable.string('ownershipId')
    t.nullable.field('personalInterests', {
      type: 'PersonalInterests',
      resolve(root: any) {
        return root.personalInterests
      },
    })
    t.nullable.string('personalInterestsId')
    t.nullable.string('phone')
    t.nullable.string('preferredName')
    t.nullable.boolean('primaryAddressIsBilling')
    t.nullable.boolean('primaryAddressIsMailing')
    t.nullable.boolean('primaryAddressIsOther')
    t.nullable.boolean('primaryAddressIsShipping')
    t.nullable.field('primaryCitizenship', {
      type: 'Country',
      resolve(root: any) {
        return root.primaryCitizenship
      },
    })
    t.nullable.string('primaryCitizenshipId')
    t.nullable.field('primaryContact', {
      type: 'Contact',
      resolve(root: any) {
        return root.primaryContact
      },
    })
    t.nullable.string('primaryContactId')
    t.nullable.field('primaryLanguage', {
      type: 'Language',
      resolve(root: any) {
        return root.primaryLanguage
      },
    })
    t.nullable.string('primaryLanguageId')
    t.nullable.field('rating', {
      type: 'Rating',
      resolve(root: any) {
        return root.rating
      },
    })
    t.nullable.string('ratingId')
    t.nullable.int('referrerScore')
    t.nullable.int('lengthOfRelationship')
    t.nullable.field('relationshipStartDate', { type: 'DateTime' })
    t.nullable.field('reviewFrequency', {
      type: 'ReviewFrequency',
      resolve(root: any) {
        return root.reviewFrequency
      },
    })
    t.nullable.string('reviewFrequencyId')
    t.nullable.field('riskTolerance', {
      type: 'RiskTolerance',
      resolve(root: any) {
        return root.riskTolerance
      },
    })
    t.nullable.string('riskToleranceId')
    t.nullable.field('secondaryCitizenship', {
      type: 'Country',
      resolve(root: any) {
        return root.secondaryCitizenship
      },
    })
    t.nullable.string('secondaryCitizenshipId')
    t.nullable.field('secondaryLanguage', {
      type: 'Language',
      resolve(root: any) {
        return root.secondaryLanguage
      },
    })
    t.nullable.string('secondaryLanguageId')
    t.nullable.field('serviceModel', {
      type: 'ServiceModel',
      resolve(root: any) {
        return root.serviceModel
      },
    })
    t.nullable.string('serviceModelId')
    t.nullable.string('shippingAddress')
    t.nullable.string('sic')
    t.nullable.string('sicDesc')
    t.nullable.string('sourceSystemId')
    t.nullable.string('lastFourDigitSSN')
    t.nullable.string('SSN')
    t.nullable.field('status', {
      type: 'AccountStatus',
      resolve(root: any) {
        return root.status
      },
    })
    t.nullable.string('statusId')
    t.nullable.field('taxBracket', {
      type: 'TaxBracket',
      resolve(root: any) {
        return root.taxBracket
      },
    })
    t.nullable.string('taxBracketId')
    t.nullable.string('taxId')
    t.nullable.field('timeHorizon', {
      type: 'TimeHorizon',
      resolve(root: any) {
        return root.timeHorizon
      },
    })
    t.nullable.string('timeHorizonId')
    t.nullable.string('personTitle')
    t.nullable.int('totalAUMJointOwner')
    t.nullable.int('totalAUMPrimaryOwner')
    t.nullable.int('totalBankDeposits')
    t.nullable.int('totalBankDepositsJointOwner')
    t.nullable.int('totalBankDepositsPrimaryOwner')
    t.nullable.int('totalClaimAmountPaid')
    t.nullable.int('totalFinancialAccounts')
    t.nullable.int('totalFinAcctsJointOwner')
    t.nullable.int('totalFinAcctsPrimaryOwner')
    t.nullable.int('totalHeldFinAcctsJointOwner')
    t.nullable.int('totalHeldFinAcctsPrimaryOwner')
    t.nullable.int('totalHouseholdPremiums')
    t.nullable.int('totalInsurance')
    t.nullable.int('totalInsuranceJointOwner')
    t.nullable.int('totalInsurancePrimaryOwner')
    t.nullable.int('totalInvestments')
    t.nullable.int('totalInvestmentsJointOwner')
    t.nullable.int('totalInvestmentsPrimaryOwner')
    t.nullable.int('totalLiabilities')
    t.nullable.int('totalLiabilitiesJointOwner')
    t.nullable.int('totalLiabilitiesPrimaryOwner')
    t.nullable.int('totalNonfinancialAssets')
    t.nullable.int('totalNonfinancialAssetsJointOwner')
    t.nullable.int('totalNonfinancialAssetsPrimaryOwner')
    t.nullable.int('totalNumberOfFinAccounts')
    t.nullable.int('totalOutstandingCredit')
    t.nullable.int('totalOutstandingCreditJointOwner')
    t.nullable.int('totalOutstandingCreditPrimaryOwner')
    t.nullable.int('totalPremium')
    t.nullable.int('totalRevenue')
    t.nullable.string('twitter')
    t.nullable.field('type', {
      type: 'AccountType',
      resolve(root: any) {
        return root.type
      },
    })
    t.nullable.string('typeId')
    t.nullable.int('walletShare')
    t.nullable.string('website')
    t.nullable.field('weddingAnniversary', { type: 'DateTime' })
    t.list.field('ContractAccount', {
      type: 'Contract',
      args: {
        where: 'ContractWhereInput',
        orderBy: 'ContractOrderByInput',
        cursor: 'ContractWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContractScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContractAccount
      },
    })
    t.list.field('OpportunityHousehold', {
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
        return root.OpportunityHousehold
      },
    })
    t.list.field('OpportunityAccount', {
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
        return root.OpportunityAccount
      },
    })
    t.list.field('FinancialGoalPrimaryOwner', {
      type: 'FinancialGoal',
      args: {
        where: 'FinancialGoalWhereInput',
        orderBy: 'FinancialGoalOrderByInput',
        cursor: 'FinancialGoalWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialGoalScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialGoalPrimaryOwner
      },
    })
    t.list.field('FinancialGoalHousehold', {
      type: 'FinancialGoal',
      args: {
        where: 'FinancialGoalWhereInput',
        orderBy: 'FinancialGoalOrderByInput',
        cursor: 'FinancialGoalWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialGoalScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialGoalHousehold
      },
    })
    t.list.field('AssetsAndLiabilitiesPrimaryOwner', {
      type: 'AssetsAndLiabilities',
      args: {
        where: 'AssetsAndLiabilitiesWhereInput',
        orderBy: 'AssetsAndLiabilitiesOrderByInput',
        cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetsAndLiabilitiesPrimaryOwner
      },
    })
    t.list.field('AssetsAndLiabilitiesJointOwner', {
      type: 'AssetsAndLiabilities',
      args: {
        where: 'AssetsAndLiabilitiesWhereInput',
        orderBy: 'AssetsAndLiabilitiesOrderByInput',
        cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetsAndLiabilitiesJointOwner
      },
    })
    t.list.field('AssetsAndLiabilitiesHousehold', {
      type: 'AssetsAndLiabilities',
      args: {
        where: 'AssetsAndLiabilitiesWhereInput',
        orderBy: 'AssetsAndLiabilitiesOrderByInput',
        cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.AssetsAndLiabilitiesHousehold
      },
    })
    t.list.field('AssetServicedByAccount', {
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
        return root.AssetServicedByAccount
      },
    })
    t.list.field('AssetProvidedByAccount', {
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
        return root.AssetProvidedByAccount
      },
    })
    t.list.field('AssetOwner', {
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
        return root.AssetOwner
      },
    })
    t.list.field('AssetAccount', {
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
        return root.AssetAccount
      },
    })
    t.list.field('FinancialHoldingPrimaryOwnerAccount', {
      type: 'FinancialHolding',
      args: {
        where: 'FinancialHoldingWhereInput',
        orderBy: 'FinancialHoldingOrderByInput',
        cursor: 'FinancialHoldingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialHoldingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialHoldingPrimaryOwnerAccount
      },
    })
    t.list.field('FinancialHoldingHouseholdAccount', {
      type: 'FinancialHolding',
      args: {
        where: 'FinancialHoldingWhereInput',
        orderBy: 'FinancialHoldingOrderByInput',
        cursor: 'FinancialHoldingWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialHoldingScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialHoldingHouseholdAccount
      },
    })
    t.list.field('FinancialAccountPrimaryOwner', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountPrimaryOwner
      },
    })
    t.list.field('FinancialAccountOverdraftLinkedAccount', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountOverdraftLinkedAccount
      },
    })
    t.list.field('FinancialAccountJointOwner', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountJointOwner
      },
    })
    t.list.field('FinancialAccountHousehold', {
      type: 'FinancialAccount',
      args: {
        where: 'FinancialAccountWhereInput',
        orderBy: 'FinancialAccountOrderByInput',
        cursor: 'FinancialAccountWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountHousehold
      },
    })
    t.nullable.field('_count', {
      type: 'AccountCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
