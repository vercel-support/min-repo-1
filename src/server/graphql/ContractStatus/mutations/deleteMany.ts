import { mutationField, nonNull } from 'nexus'

export const ContractStatusDeleteManyMutation = mutationField(
  'deleteManyContractStatus',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ContractStatusWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.contractStatus.deleteMany({ where } as any)
    },
  },
)
