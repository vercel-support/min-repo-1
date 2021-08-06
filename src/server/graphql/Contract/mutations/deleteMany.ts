import { mutationField, nonNull } from 'nexus'

export const ContractDeleteManyMutation = mutationField('deleteManyContract', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'ContractWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.contract.deleteMany({ where } as any)
  },
})
