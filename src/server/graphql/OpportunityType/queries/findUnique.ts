import { queryField, nonNull } from 'nexus'

export const OpportunityTypeFindUniqueQuery = queryField(
  'findUniqueOpportunityType',
  {
    type: 'OpportunityType',
    args: {
      where: nonNull('OpportunityTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.opportunityType.findUnique({
        where,
        ...select,
      })
    },
  },
)
