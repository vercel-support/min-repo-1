import { mutationField, nonNull } from 'nexus'

export const ContractStatusUpdateManyMutation = mutationField(
  'updateManyContractStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ContractStatusWhereInput',
      data: nonNull('ContractStatusUpdateManyMutationInput'),
    },
    resolve(_parent, args, { prisma }) {
      return prisma.contractStatus.updateMany(args as any)
    },
  },
)
