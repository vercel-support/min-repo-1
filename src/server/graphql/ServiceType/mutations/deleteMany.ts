import { mutationField, nonNull } from 'nexus'

export const ServiceTypeDeleteManyMutation = mutationField(
  'deleteManyServiceType',
  {
    type: nonNull('BatchPayload'),
    args: {
      where: 'ServiceTypeWhereInput',
    },
    resolve: async (_parent, { where }, { prisma }) => {
      return prisma.serviceType.deleteMany({ where } as any)
    },
  },
)
