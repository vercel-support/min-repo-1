import { mutationField, nonNull } from 'nexus'

export const TimeZoneDeleteManyMutation = mutationField('deleteManyTimeZone', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TimeZoneWhereInput',
  },
  resolve: async (_parent, { where }, { prisma }) => {
    return prisma.timeZone.deleteMany({ where } as any)
  },
})
