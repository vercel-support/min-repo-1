import { mutationField, nonNull } from 'nexus'

export const OpportunityRecordTypeUpdateManyMutation = mutationField(
  'updateManyOpportunityRecordType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'OpportunityRecordTypeWhereInput',
      data: nonNull('OpportunityRecordTypeUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.opportunityRecordType.updateMany(args as any)
    },
  },
)
