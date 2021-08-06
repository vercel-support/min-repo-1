import { queryField, nonNull } from 'nexus'

export const ContractStatusFindUniqueQuery = queryField(
  'findUniqueContractStatus',
  {
    type: 'ContractStatus',
    args: {
      where: nonNull('ContractStatusWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.contractStatus.findUnique({
        where,
        ...select,
      })
    },
  },
)
