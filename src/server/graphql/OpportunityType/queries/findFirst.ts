import { queryField, list } from 'nexus'

export const OpportunityTypeFindFirstQuery = queryField(
  'findFirstOpportunityType',
  {
    type: 'OpportunityType',
    args: {
      where: 'OpportunityTypeWhereInput',
      orderBy: list('OpportunityTypeOrderByInput'),
      cursor: 'OpportunityTypeWhereUniqueInput',
      distinct: 'OpportunityTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
