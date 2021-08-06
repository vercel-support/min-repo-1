import { queryField, nonNull, list } from 'nexus'

export const OpportunityTypeFindManyQuery = queryField(
  'findManyOpportunityType',
  {
    type: nonNull(list(nonNull('OpportunityType'))),
    args: {
      where: 'OpportunityTypeWhereInput',
      orderBy: list('OpportunityTypeOrderByInput'),
      cursor: 'OpportunityTypeWhereUniqueInput',
      distinct: 'OpportunityTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.opportunityType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
