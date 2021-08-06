import { mutationField, nonNull } from 'nexus'

export const OpportunityRecordTypeDeleteManyMutation = mutationField(
  'deleteManyOpportunityRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityRecordTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.opportunityRecordType.deleteMany({ where } as any)
    },
  },
)
