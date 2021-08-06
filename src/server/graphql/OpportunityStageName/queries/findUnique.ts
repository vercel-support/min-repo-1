import { queryField, nonNull } from 'nexus'

export const OpportunityStageNameFindUniqueQuery = queryField(
  'findUniqueOpportunityStageName',
  {
    type: 'OpportunityStageName',
    args: {
      where: nonNull('OpportunityStageNameWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.opportunityStageName.findUnique({
        where,
        ...select,
      })
    },
  },
)
