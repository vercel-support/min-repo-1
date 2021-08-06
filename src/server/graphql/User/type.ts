import { objectType } from 'nexus'

export const User = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'User',
  definition(t) {
    t.string('id')
    t.nullable.string('name')
    t.nullable.string('email')
    t.nullable.field('emailVerified', { type: 'DateTime' })
    t.nullable.string('image')
    t.field('createdAt', { type: 'DateTime' })
    t.field('updatedAt', { type: 'DateTime' })
    t.nullable.boolean('isAdmin')
    t.nullable.string('aboutMe')
    t.nullable.boolean('isActive')
    t.nullable.string('address')
    t.nullable.boolean('receivesAdminInfoEmails')
    t.nullable.string('alias')
    t.nullable.boolean('forecastEnabled')
    t.nullable.string('digestFrequency')
    t.nullable.string('companyName')
    t.nullable.field('contact', {
      type: 'Contact',
      resolve(root: any) {
        return root.contact
      },
    })
    t.nullable.string('contactId')
    t.nullable.string('department')
    t.nullable.string('division')
    t.nullable.string('senderEmail')
    t.nullable.string('senderName')
    t.nullable.string('signature')
    t.nullable.string('employeeNumber')
    t.nullable.string('endDay')
    t.nullable.string('extension')
    t.nullable.string('fax')
    t.nullable.boolean('isProfilePhotoActive')
    t.nullable.field('individual', {
      type: 'Individual',
      resolve(root: any) {
        return root.individual
      },
    })
    t.nullable.string('individualId')
    t.nullable.boolean('receivesInfoEmails')
    t.nullable.string('userSubtype')
    t.nullable.boolean('isSystemControlled')
    t.nullable.field('language', {
      type: 'Language',
      resolve(root: any) {
        return root.language
      },
    })
    t.nullable.string('languageId')
    t.nullable.string('mobilePhone')
    t.nullable.string('communityNickname')
    t.nullable.string('outOfOfficeMessage')
    t.nullable.boolean('passwordResetAttempt')
    t.nullable.string('passwordResetLockoutDate')
    t.nullable.string('phone')
    t.nullable.string('federationIdentifier')
    t.nullable.boolean('isExtIndicatorVisible')
    t.nullable.string('startDay')
    t.nullable.string('stayInTouchNote')
    t.nullable.string('stayInTouchSignature')
    t.nullable.string('stayInTouchSubject')
    t.nullable.field('timeZone', {
      type: 'TimeZone',
      resolve(root: any) {
        return root.timeZone
      },
    })
    t.nullable.string('timeZoneId')
    t.nullable.string('title')
    t.nullable.string('mediumBannerPhotoUrl')
    t.nullable.string('bannerPhotoUrl')
    t.nullable.string('smallBannerPhotoUrl')
    t.nullable.string('mediumPhotoUrl')
    t.nullable.string('username')
    t.list.field('sessions', {
      type: 'Session',
      args: {
        where: 'SessionWhereInput',
        orderBy: 'SessionOrderByInput',
        cursor: 'SessionWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SessionScalarFieldEnum',
      },
      resolve(root: any) {
        return root.sessions
      },
    })
    t.list.field('posts', {
      type: 'Post',
      args: {
        where: 'PostWhereInput',
        orderBy: 'PostOrderByInput',
        cursor: 'PostWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'PostScalarFieldEnum',
      },
      resolve(root: any) {
        return root.posts
      },
    })
    t.nullable.field('group', {
      type: 'Group',
      resolve(root: any) {
        return root.group
      },
    })
    t.nullable.string('groupId')
    t.list.field('comments', {
      type: 'Comment',
      args: {
        where: 'CommentWhereInput',
        orderBy: 'CommentOrderByInput',
        cursor: 'CommentWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CommentScalarFieldEnum',
      },
      resolve(root: any) {
        return root.comments
      },
    })
    t.list.field('OperatingHoursCreatedByUser', {
      type: 'OperatingHours',
      args: {
        where: 'OperatingHoursWhereInput',
        orderBy: 'OperatingHoursOrderByInput',
        cursor: 'OperatingHoursWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OperatingHoursScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OperatingHoursCreatedByUser
      },
    })
    t.list.field('OperatingHoursLastModifiedByUser', {
      type: 'OperatingHours',
      args: {
        where: 'OperatingHoursWhereInput',
        orderBy: 'OperatingHoursOrderByInput',
        cursor: 'OperatingHoursWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'OperatingHoursScalarFieldEnum',
      },
      resolve(root: any) {
        return root.OperatingHoursLastModifiedByUser
      },
    })
    t.list.field('ContractCreatedByUser', {
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
        return root.ContractCreatedByUser
      },
    })
    t.list.field('ContractLastModifiedByUser', {
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
        return root.ContractLastModifiedByUser
      },
    })
    t.list.field('ContractCustomerSignedByUser', {
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
        return root.ContractCustomerSignedByUser
      },
    })
    t.list.field('ContractOwner', {
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
        return root.ContractOwner
      },
    })
    t.list.field('ContractCompanySignedByUser', {
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
        return root.ContractCompanySignedByUser
      },
    })
    t.list.field('ContractActivatedByUser', {
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
        return root.ContractActivatedByUser
      },
    })
    t.list.field('CampaignMemberLastModifiedByUser', {
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
        return root.CampaignMemberLastModifiedByUser
      },
    })
    t.list.field('CampaignMemberCreatedByUser', {
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
        return root.CampaignMemberCreatedByUser
      },
    })
    t.list.field('CampaignLastModifiedByUser', {
      type: 'Campaign',
      args: {
        where: 'CampaignWhereInput',
        orderBy: 'CampaignOrderByInput',
        cursor: 'CampaignWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CampaignScalarFieldEnum',
      },
      resolve(root: any) {
        return root.CampaignLastModifiedByUser
      },
    })
    t.list.field('CampaignCreatedByUser', {
      type: 'Campaign',
      args: {
        where: 'CampaignWhereInput',
        orderBy: 'CampaignOrderByInput',
        cursor: 'CampaignWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'CampaignScalarFieldEnum',
      },
      resolve(root: any) {
        return root.CampaignCreatedByUser
      },
    })
    t.list.field('OpportunityOwner', {
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
        return root.OpportunityOwner
      },
    })
    t.list.field('OpportunityLastModifiedByUser', {
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
        return root.OpportunityLastModifiedByUser
      },
    })
    t.list.field('OpportunityReferredByUser', {
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
        return root.OpportunityReferredByUser
      },
    })
    t.list.field('OpportunityCreatedByUser', {
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
        return root.OpportunityCreatedByUser
      },
    })
    t.list.field('FinancialGoalOwner', {
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
        return root.FinancialGoalOwner
      },
    })
    t.list.field('FinancialGoalLastModifiedByUser', {
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
        return root.FinancialGoalLastModifiedByUser
      },
    })
    t.list.field('FinancialGoalCreatedByUser', {
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
        return root.FinancialGoalCreatedByUser
      },
    })
    t.list.field('AssetsAndLiabilitiesOwner', {
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
        return root.AssetsAndLiabilitiesOwner
      },
    })
    t.list.field('AssetsAndLiabilitiesLastModifiedByUser', {
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
        return root.AssetsAndLiabilitiesLastModifiedByUser
      },
    })
    t.list.field('SecuritiesOwner', {
      type: 'Securities',
      args: {
        where: 'SecuritiesWhereInput',
        orderBy: 'SecuritiesOrderByInput',
        cursor: 'SecuritiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SecuritiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.SecuritiesOwner
      },
    })
    t.list.field('SecuritiesLastModifiedByUser', {
      type: 'Securities',
      args: {
        where: 'SecuritiesWhereInput',
        orderBy: 'SecuritiesOrderByInput',
        cursor: 'SecuritiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SecuritiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.SecuritiesLastModifiedByUser
      },
    })
    t.list.field('SecuritiesCreatedByUser', {
      type: 'Securities',
      args: {
        where: 'SecuritiesWhereInput',
        orderBy: 'SecuritiesOrderByInput',
        cursor: 'SecuritiesWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'SecuritiesScalarFieldEnum',
      },
      resolve(root: any) {
        return root.SecuritiesCreatedByUser
      },
    })
    t.list.field('AssetLastModifiedByUser', {
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
        return root.AssetLastModifiedByUser
      },
    })
    t.list.field('AssetCreatedByUser', {
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
        return root.AssetCreatedByUser
      },
    })
    t.list.field('FinancialHoldingLastModifiedByUser', {
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
        return root.FinancialHoldingLastModifiedByUser
      },
    })
    t.list.field('FinancialHoldingCreatedByUser', {
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
        return root.FinancialHoldingCreatedByUser
      },
    })
    t.list.field('FinancialAccountRoleLastModifiedByUser', {
      type: 'FinancialAccountRole',
      args: {
        where: 'FinancialAccountRoleWhereInput',
        orderBy: 'FinancialAccountRoleOrderByInput',
        cursor: 'FinancialAccountRoleWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'FinancialAccountRoleScalarFieldEnum',
      },
      resolve(root: any) {
        return root.FinancialAccountRoleLastModifiedByUser
      },
    })
    t.list.field('FinancialAccountOwner', {
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
        return root.FinancialAccountOwner
      },
    })
    t.list.field('FinancialAccountLastModifiedByUser', {
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
        return root.FinancialAccountLastModifiedByUser
      },
    })
    t.list.field('FinancialAccountCreatedByUser', {
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
        return root.FinancialAccountCreatedByUser
      },
    })
    t.list.field('IndividualLastModifiedByUser', {
      type: 'Individual',
      args: {
        where: 'IndividualWhereInput',
        orderBy: 'IndividualOrderByInput',
        cursor: 'IndividualWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'IndividualScalarFieldEnum',
      },
      resolve(root: any) {
        return root.IndividualLastModifiedByUser
      },
    })
    t.list.field('IndividualOwner', {
      type: 'Individual',
      args: {
        where: 'IndividualWhereInput',
        orderBy: 'IndividualOrderByInput',
        cursor: 'IndividualWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'IndividualScalarFieldEnum',
      },
      resolve(root: any) {
        return root.IndividualOwner
      },
    })
    t.list.field('IndividualCreatedByUser', {
      type: 'Individual',
      args: {
        where: 'IndividualWhereInput',
        orderBy: 'IndividualOrderByInput',
        cursor: 'IndividualWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'IndividualScalarFieldEnum',
      },
      resolve(root: any) {
        return root.IndividualCreatedByUser
      },
    })
    t.list.field('ContactReportsToUser', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactReportsToUser
      },
    })
    t.list.field('ContactCreatedByUser', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactCreatedByUser
      },
    })
    t.list.field('ContactOwner', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactOwner
      },
    })
    t.list.field('ContactLastModifiedByUser', {
      type: 'Contact',
      args: {
        where: 'ContactWhereInput',
        orderBy: 'ContactOrderByInput',
        cursor: 'ContactWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'ContactScalarFieldEnum',
      },
      resolve(root: any) {
        return root.ContactLastModifiedByUser
      },
    })
    t.list.field('AccountOwner', {
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
        return root.AccountOwner
      },
    })
    t.list.field('AccountUser', {
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
        return root.AccountUser
      },
    })
    t.list.field('AccountLastModifiedByUser', {
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
        return root.AccountLastModifiedByUser
      },
    })
    t.list.field('AccountCreatedByUser', {
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
        return root.AccountCreatedByUser
      },
    })
    t.nullable.field('_count', {
      type: 'UserCountOutputType',
      resolve(root: any) {
        return root._count
      },
    })
  },
})
