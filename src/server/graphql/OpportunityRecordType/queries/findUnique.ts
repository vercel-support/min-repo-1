import { queryField, nonNull } from 'nexus'

export const OpportunityRecordTypeFindUniqueQuery = queryField(
  'findUniqueOpportunityRecordType',
  {
    type: 'OpportunityRecordType',
    args: {
      where: nonNull('OpportunityRecordTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.opportunityRecordType.findUnique({
        where,
        ...select,
      })
    },
  },
)
