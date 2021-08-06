import { mutationField, nonNull } from 'nexus'

export const ContractDeleteOneMutation = mutationField('deleteOneContract', {
  type: 'Contract',
  args: {
    where: nonNull('ContractWhereUniqueInput'),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    return prisma.contract.delete({
      where,
      ...select,
    })
  },
})
