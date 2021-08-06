import { mutationField, nonNull } from 'nexus'

export const ContractUpdateManyMutation = mutationField('updateManyContract', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ContractWhereInput',
    data: nonNull('ContractUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.contract.updateMany(args as any)
  },
})
