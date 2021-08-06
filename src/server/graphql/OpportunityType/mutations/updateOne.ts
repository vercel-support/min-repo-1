import { mutationField, nonNull } from 'nexus'

export const OpportunityTypeUpdateOneMutation = mutationField(
  'updateOneOpportunityType',
  {
    type: nonNull('OpportunityType'),
    args: {
      where: nonNull('OpportunityTypeWhereUniqueInput'),
      data: nonNull('OpportunityTypeUpdateInput'),
    },
    resolve(_parent, { data, where }, { prisma, select }) {
      return prisma.opportunityType.update({
        where,
        data,
        ...select,
      })
    },
  },
)
