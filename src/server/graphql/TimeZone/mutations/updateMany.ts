import { mutationField, nonNull } from 'nexus'

export const TimeZoneUpdateManyMutation = mutationField('updateManyTimeZone', {
  type: nonNull('BatchPayload'),
  args: {
    where: 'TimeZoneWhereInput',
    data: nonNull('TimeZoneUpdateManyMutationInput'),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.timeZone.updateMany(args as any)
  },
})
